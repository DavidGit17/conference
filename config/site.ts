export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Commitee",
      href: "/Commitee",
    },
    {
      label: "Call for Papers",
      href: "/Call for Papers",
    },
    {
      label: "KeyNote",
      href: "/KeyNote",
    },
    {
      label: "Submission",
      href: "/Submission",
    },
	{
		label: "Publication",
		href: "/Publication",
	  },
	  {
		label: "Registration",
		href: "/Registration",
	  },
	  {
		label: "Venue",
		href: "/Venue",
	  },
	  {
		label: "Contact",
		href: "/Contact",
	  },
	],
	navMenuItems: [
		{
			label: "Home",
			href: "/",
		},
    {
      label: "Commitee",
      href: "/commitee",
    },
    {
      label: "Call\ffor\fPapers",
      href: "/call-for-papers",
    },
    {
      label: "KeyNote",
      href: "/keynote",
    },
    {
      label: "Submission",
      href: "/submission",
    },
	{
		label: "Publication",
		href: "/publication",
	  },
	  {
		label: "Registration",
		href: "/registration",
	  },
	  {
		label: "Venue",
		href: "/venue",
	  },
	  {
		label: "Contact",
		href: "/contact",
	  },
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev"
	},
};
