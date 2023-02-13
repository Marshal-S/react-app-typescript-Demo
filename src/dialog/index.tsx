import { useRef } from "react"

export const DialogView = () => {
    const container = useRef<HTMLDivElement | null>(null)

    const jumpHome = () => {
        container.current?.remove()
        window.location.href = '/home'
    }

    return (
        <div ref={container} id="dialog-view" style={{display:"flex", justifyContent: 'center', alignItems: 'center', pointerEvents: 'auto',
            position: "fixed", left: 0, right: 0, top: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.6)'}}>
            <div style={{display:"flex", justifyContent: 'center', alignItems: 'center', backgroundColor: 'red'}}>
                <div style={{color: 'black', fontSize: 20}} onClick={jumpHome} >点击我跳转到首页</div>
            </div>
        </div>
    )
}