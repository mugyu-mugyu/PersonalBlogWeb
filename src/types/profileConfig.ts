export type ProfileConfig = {
	avatar?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		/** popupText 存在时可省略，此时不会跳转 */
		url?: string;
		icon: string;
		showName?: boolean;
		/** 设置后点击将弹出文本弹窗，不再跳转 */
		popupText?: string;
		/** 复制时使用的文本，不设则复制 popupText 全文 */
		popupCopyText?: string;
	}[];
};
