interface IProps {
    className: string;
    children: any;
}

const Container: React.FC<IProps> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Container;
