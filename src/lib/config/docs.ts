import type { NavItem, SidebarNavItem } from "$lib/types/nav.js";

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Deliverables",
			href: "/deliverables",
		},
		{
			title: "About",
			href: "/about",
		},
		{
			title: "Showcase",
			href: "/showcase",
		},
	],
	sidebarNav: [
		{
			title: "List of Deliverables",
			items: [
				{
					title: "Research and Personas",
					href: "/deliverables/01-research-personas",
					items: [],
				},
				{
					title: "User Journey Mapping",
					href: "/deliverables/02-journey-map",
					items: [],
				},
				{
					title: "Wireframing and Prototypes",
					href: "/deliverables/03-wireframing-prototype-design",
					items: [],
				},
				{
					title: "Usability Testing",
					href: "/deliverables/04-usability-testing",
					items: [],
				},
				{
					title: "Reflection",
					href: "/deliverables/05-reflection",
					items: [],
				},
			],
		},
	],
};
