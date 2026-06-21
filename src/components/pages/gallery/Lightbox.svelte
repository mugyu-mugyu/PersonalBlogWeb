<script lang="ts">
	interface Props {
		photos: string[];
	}

	let { photos }: Props = $props();

	let visible = $state(false);
	let currentIndex = $state(0);
	let scale = $state(1);
	let panX = $state(0);
	let panY = $state(0);

	let startX = 0;
	let startY = 0;
	let startPanX = 0;
	let startPanY = 0;
	let isDragging = false;
	let hasMoved = false;

	let overlayEl: HTMLDivElement | null = $state(null);

	function open(index: number) {
		currentIndex = index;
		scale = 1;
		panX = 0;
		panY = 0;
		visible = true;
		document.body.style.overflow = "hidden";
	}

	function close() {
		visible = false;
		scale = 1;
		panX = 0;
		panY = 0;
		document.body.style.overflow = "";
	}

	function prev() {
		scale = 1;
		panX = 0;
		panY = 0;
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
	}

	function next() {
		scale = 1;
		panX = 0;
		panY = 0;
		currentIndex = (currentIndex + 1) % photos.length;
	}

	function toggleZoom(e: MouseEvent) {
		if (hasMoved) return;
		if (scale > 1.1) {
			scale = 1;
			panX = 0;
			panY = 0;
		} else {
			scale = 2.5;
		}
	}

	function onWheel(e: WheelEvent) {
		e.preventDefault();
		const delta = e.deltaY > 0 ? -0.3 : 0.3;
		scale = Math.max(0.5, Math.min(5, scale + delta));
		if (scale <= 1) {
			panX = 0;
			panY = 0;
		}
	}

	function onPointerDown(e: PointerEvent) {
		if (scale <= 1.1) return;
		isDragging = true;
		hasMoved = false;
		startX = e.clientX;
		startY = e.clientY;
		startPanX = panX;
		startPanY = panY;
		(e.target as HTMLElement).setPointerCapture(e.pointerId);
	}

	function onPointerMove(e: PointerEvent) {
		if (!isDragging) return;
		const dx = e.clientX - startX;
		const dy = e.clientY - startY;
		if (Math.abs(dx) > 3 || Math.abs(dy) > 3) {
			hasMoved = true;
		}
		panX = startPanX + dx;
		panY = startPanY + dy;
	}

	function onPointerUp() {
		isDragging = false;
	}

	function handleKeydown(e: KeyboardEvent) {
		if (!visible) return;
		if (e.key === "Escape") { close(); return; }
		if (e.key === "ArrowLeft") { prev(); return; }
		if (e.key === "ArrowRight") { next(); return; }
	}

	// Move overlay to document.body to escape layout constraints
	$effect(() => {
		if (visible && overlayEl && overlayEl.parentElement !== document.body) {
			document.body.appendChild(overlayEl);
		}
		return () => {
			// Clean up: remove overlay from body when component unmounts
			if (overlayEl && overlayEl.parentElement === document.body) {
				overlayEl.remove();
			}
		};
	});

	// Expose API
	$effect(() => {
		(window as any).__lightbox = { open };
		return () => { (window as any).__lightbox = null; };
	});

	$effect(() => {
		if (visible) {
			window.addEventListener("keydown", handleKeydown);
			return () => window.removeEventListener("keydown", handleKeydown);
		}
	});
</script>

{#if visible}
	<div class="lb-overlay" bind:this={overlayEl} onclick={close}>
		<!-- 顶部工具栏 -->
		<div class="lb-topbar">
			<span class="lb-counter">{currentIndex + 1} / {photos.length}</span>
			<button class="lb-btn" onclick={close} aria-label="关闭">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
			</button>
		</div>

		<!-- 左箭头 -->
		{#if photos.length > 1}
			<button class="lb-arrow lb-arrow-left" onclick={(e) => { e.stopPropagation(); prev(); }} aria-label="上一张">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
			</button>
		{/if}

		<!-- 图片 -->
		<div class="lb-image-area">
			<img
				src={photos[currentIndex]}
				alt=""
				class="lb-image"
				style="transform: translate({panX}px, {panY}px) scale({scale})"
				class:lb-dragging={isDragging}
				class:lb-zoomable={scale > 1.1}
				onclick={(e) => { e.stopPropagation(); toggleZoom(e); }}
				onwheel={(e) => { e.stopPropagation(); onWheel(e); }}
				onpointerdown={onPointerDown}
				onpointermove={onPointerMove}
				onpointerup={onPointerUp}
				onpointerleave={onPointerUp}
				draggable="false"
			/>
		</div>

		<!-- 右箭头 -->
		{#if photos.length > 1}
			<button class="lb-arrow lb-arrow-right" onclick={(e) => { e.stopPropagation(); next(); }} aria-label="下一张">
				<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
			</button>
		{/if}

		<!-- 底部缩略图导航 -->
		{#if photos.length > 1}
			<div class="lb-dots">
				{#each photos as _, i}
					<button
						class="lb-dot"
						class:lb-dot-active={i === currentIndex}
						onclick={(e) => { e.stopPropagation(); currentIndex = i; scale = 1; panX = 0; panY = 0; }}
						aria-label={`第 ${i + 1} 张`}
					></button>
				{/each}
			</div>
		{/if}
	</div>
{/if}

<style>
	.lb-overlay {
		position: fixed;
		inset: 0;
		z-index: 9999;
		background: rgba(0, 0, 0, 0.88);
		animation: lb-in 0.25s ease;
	}
	@keyframes lb-in { from { opacity: 0; } to { opacity: 1; } }

	.lb-topbar {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 1rem 1.25rem;
		background: linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, transparent 100%);
	}

	.lb-counter {
		color: #fff;
		font-size: 0.9375rem;
		font-weight: 500;
		letter-spacing: 0.02em;
	}

	.lb-btn {
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: transparent;
		color: #fff;
		border-radius: 50%;
		cursor: pointer;
		transition: background 0.15s;
	}
	.lb-btn:hover { background: rgba(255,255,255,0.15); }

	.lb-image-area {
		position: absolute;
		inset: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		overflow: hidden;
	}

	.lb-image {
		max-width: 100vw;
		max-height: 100vh;
		width: auto;
		height: auto;
		object-fit: contain;
		cursor: zoom-in;
		transition: transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1.2);
		user-select: none;
		-webkit-user-select: none;
	}

	.lb-image.lb-zoomable {
		cursor: grab;
		transition: none;
	}
	.lb-image.lb-dragging {
		cursor: grabbing;
		transition: none;
	}

	.lb-arrow {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		z-index: 10;
		width: 48px;
		height: 48px;
		display: flex;
		align-items: center;
		justify-content: center;
		border: none;
		background: rgba(255,255,255,0.08);
		color: #fff;
		border-radius: 50%;
		cursor: pointer;
		transition: background 0.15s;
		backdrop-filter: blur(8px);
	}
	.lb-arrow:hover { background: rgba(255,255,255,0.2); }
	.lb-arrow-left { left: 1rem; }
	.lb-arrow-right { right: 1rem; }

	.lb-dots {
		position: absolute;
		bottom: 1.25rem;
		left: 50%;
		transform: translateX(-50%);
		z-index: 10;
		display: flex;
		gap: 0.5rem;
	}

	.lb-dot {
		width: 8px;
		height: 8px;
		border-radius: 50%;
		border: none;
		background: rgba(255,255,255,0.35);
		cursor: pointer;
		padding: 0;
		transition: background 0.15s;
	}
	.lb-dot:hover { background: rgba(255,255,255,0.6); }
	.lb-dot-active { background: #fff; }

	@media (max-width: 640px) {
		.lb-arrow { width: 38px; height: 38px; }
		.lb-arrow svg { width: 22px; height: 22px; }
		.lb-arrow-left { left: 0.5rem; }
		.lb-arrow-right { right: 0.5rem; }
	}
</style>
