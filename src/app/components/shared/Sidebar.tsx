interface IProps {
    children: React.ReactNode;
}

const Sidebar: React.FC<IProps> = ({ children }) => {
    return <div>{children}</div>;
};

export default Sidebar;
