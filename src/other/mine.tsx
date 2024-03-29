import { Link, useNavigate } from "react-router-dom"
import { showDialog } from "../dialog/dialog"

const MineView = () => {
    const navigate = useNavigate()

    return (
        <div
            style={{
                background: "#000000BB",
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                height: '100',
                userSelect: 'none',
                pointerEvents: 'auto',
            }}>
            <div style={{fontSize: 48, marginTop: 20}}>我是个人页的标题</div>

            <Link to='/home'>通过Link跳转到home</Link>

            <Link to='/home/detail'>通过Link跳转到通用detail</Link>

            <div 
                onClick={() => {
                    navigate('/home')
                }}
                style={{
                    fontSize: 18, 
                    marginTop: 20
                }}
                >通过navigate，我也可以跳转到home页</div>
            <div 
                onClick={() => {
                    showDialog()
                }}
                style={{
                    fontSize: 18, 
                    marginTop: 20
                }}
                >弹出弹窗以跳转到首页</div>
        </div>
    )
}

export default MineView