import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { SidebarMenu } from "./SidebarMenu";
import type { MenuItem } from "./SidebarMenu";

const sampleMenuItems: MenuItem[] = [
  { id: "1", label: "Main" },
  {
    id: "2",
    label: "Products",
    children: [
      { id: "2-1", label: "Laptops" },
      { id: "2-2", label: "Phones" },
    ],
  },
  { id: "3", label: "Settings" },
];

const SidebarMenuWithState = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open menu</button>
      <SidebarMenu
        items={sampleMenuItems}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

const meta: Meta = {
  title: "Navigation/SidebarMenu",
  render: () => <SidebarMenuWithState />,
};

export default meta;

export const Default: StoryObj = {};
