import React from "react";
import "../styles/components/menuItem.css";

interface MenuItemProps {
    title: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ title }) => {
    return (
        <li>
            <a href="#">{title}</a>
        </li>
    );
};

export default MenuItem;