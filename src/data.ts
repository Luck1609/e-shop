import {  IconCreditCardRefund, IconGavel, IconHelpCircle, IconLocation, IconSettings, IconShieldCheck, IconShoppingBag, IconSpyOff, IconTruckReturn, IconUser } from "@tabler/icons-react";

export const helpLinks = [
  {
    label: "FAQ",
    url: "/help/faq",
    icon: IconHelpCircle
  },
  {
    label: "Privacy Policy",
    url: "/help/privacy-policy",
    icon: IconSpyOff
  },
  {
    label: "Refund Policy",
    url: "/help/refund-policy",
    icon: IconCreditCardRefund
  },
  {
    label: "Returns & Refunds",
    url: "/help/shipping-&-refund",
    icon: IconTruckReturn
  },
  {
    label: "Terms & Conditions",
    url: "/help/terms-and-conditions",
    icon: IconGavel
  },
  // {
  //   label: "How to buy",
  //   url: "how-to-buy",
  // },
];


export const authLinks = [
  {
    label: "Account details",
    description: "Manage your profile and account details",
    icon: IconUser,
    url: "account-details",
  },
  {
    label: "Purchase history",
    description: "Track all your product purchases",
    icon: IconShoppingBag,
    url: "purchase-history",
  },
  {
    label: "Contact details",
    description: "Add delivery address and contact details",
    icon: IconLocation,
    url: "contact-details",
  },
  {
    label: "Security",
    description: "Manage login and security details",
    icon: IconShieldCheck,
    url: "security",
  },
  {
    label: "Settings",
    description: "Modify your app useage preference",
    icon: IconSettings,
    url: "settings",
  },
];