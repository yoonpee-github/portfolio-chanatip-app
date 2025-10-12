import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@yoonpee-github",
    icon: Icons.gitHub,
    link: "https://github.com/yoonpee-github",
  },
  {
    name: "LinkedIn",
    username: "Chanatip Sombatanurak",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/chanatip-sombatanurak-9a17b9388",
  },
  {
    name: "Call",
    username: "062-316-2888",
    icon: Icons.contact,
    link: "tel:0623162888",
  },
  {
    name: "Gmail",
    username: "yoonpee.242@gmail.com",
    icon: Icons.gmail,
    link: "mailto:yoonpee.242@gmail.com",
  },
];
