import { IShared } from '../../../lib/constants/config';

const Container: React.FC<IShared> = ({ className, children }) => {
    return <div className={className}>{children}</div>;
};

export default Container;
