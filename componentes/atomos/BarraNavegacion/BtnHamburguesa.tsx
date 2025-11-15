import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons"

interface Props {
    onClick: () => void;
}

const BtnHamburguesa = ({ onClick }: Props) => {
    return (
        <Button
            type="text"
            icon={<MenuOutlined />}
            onClick={onClick}
            className="navbar-menu-button"
        >   

        </Button>
    )
}

export default BtnHamburguesa