import { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';

export default function SidebarOverlay() {
    const [visible, setVisible] = useState(false);
    
    const sidebarItems=[
    {
        name:'Dashboard',
        icon:'pi pi-home',
        path:'/dashboard'
    },
    {
        name:'Share Meal',
        icon:'pi pi-heart-fill',
        path:'/sharemeal'
    },
    {
        name:'Analytics',
        icon:'pi pi-chart-bar',
        path:'/analytics'
    }]

    return (
        <div className="card flex justify-content-center">
            <Sidebar visible={visible} onHide={() => setVisible(false)} header={<p className='text-xl font-bold'>ShareMeal</p>}>
                
               {sidebarItems.map((item)=>{
                return (
                    <div className='flex font-semibold gap-2'> <a className="p-ripple flex gap-2 align-items-center cursor-pointer p-3 border-round text-700 hover:surface-100 transition-duration-150 transition-colors w-full no-underline" href={item.path}>
                        <i className={item.icon}/>{item.name}
                        </a></div>
                )
               })}
            </Sidebar>
            <Button text icon="pi pi-bars" onClick={() => setVisible(true)} pt={{
                icon:{ className:  'text-900' }
            }} />
        </div>
    )
}