import { dev } from '$app/environment'

export const siteConfig = {
	name: "Health Companion",
	url: dev ? "http://localhost:5173/" : "",
	description: "SOEN 357 Case Study: UX/UI Design of a Health Companion Super App. Concordia University, Winter 2025.",
	links: {
		github: "https://github.com/Verdone/health-companion-ux-strategy",
		figma: "https://www.figma.com/files/project/329187820",
	},
	keywords: `soen 357, health companion super app, design, ui, ux, user interface, user experience, mini project, mobile application design`,
};

export type SiteConfig = typeof siteConfig;