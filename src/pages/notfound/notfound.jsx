import { Link } from "react-router-dom";
import "./notfound.css";
const { Result, Button } = require("antd")

const NotFound = () => {
    return (
        <Result
            className="notfound"
            status="404"
            title="404"
            subTitle="网页走丢了"
            extra={<Button type="primary"><Link to='/admin'>返回首页</Link></Button>}
        />

    )
}
export default NotFound;