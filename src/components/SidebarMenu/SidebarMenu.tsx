import "./SidebarMenu.scss";

export interface MenuItem {
  id: string;
  label: string;
  children?: MenuItem[];
}
export interface SidebarMenuProps {
  items: MenuItem[];
  isOpen: boolean;
  onClose: () => void;
}

const SubMenu = ({ items }: { items: MenuItem[] }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.label}
          {item.children && item.children.length > 0 && (
            <SubMenu items={item.children} />
          )}
        </li>
      ))}
    </ul>
  );
};

export const SidebarMenu = ({ items, isOpen, onClose }: SidebarMenuProps) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="sidebar-overlay" onClick={onClose}>
      <div className="sidebar-menu" onClick={(e) => e.stopPropagation()}>
        <SubMenu items={items}/>
      </div>
    </div>
  );
};
