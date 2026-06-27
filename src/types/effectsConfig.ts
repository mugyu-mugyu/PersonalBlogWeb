export type SakuraConfig = {
	enable: boolean;
	switchable: boolean;
	sakuraNum: number;
	limitTimes: number;
	size: { min: number; max: number };
	opacity: { min: number; max: number };
	speed: {
		horizontal: { min: number; max: number };
		vertical: { min: number; max: number };
		rotation: number;
		fadeSpeed: number;
	};
	zIndex: number;
};