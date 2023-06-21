import React from "react";
import './Sidebar.css';
import {AccountCircleOutlined, AssignmentInd, CheckBox, HomeWork, TrendingUp, VerifiedUser} from "@material-ui/icons";


export default function Sidebar() {
    return <div className={'sidebar'}>
        <div className={'sidebar_Wrapper'}>
            <div className={'sidebar_Menu'}>
                <h3 className={'sidebar_Title'}>Dashboard</h3>
                <ul className={'sidebar_List'}>
                    <li className={'sidebar_List_Item'}><HomeWork/>
                        Home
                    </li>
                    <li className={'sidebar_List_Item'}><TrendingUp/>
                        통계
                    </li>
                    <li className={'sidebar_List_Item'}>
                        <CheckBox/>
                    </li>
                </ul>
            </div>
            <div className={'sidebar_Menu'}>
                <h3 className={'sidebar_Title'}>User </h3>
                <ul className={'sidebar_List'}>
                    <li className={'sidebar_List_Item'}><AccountCircleOutlined/>
                        회원 현황
                    </li>
                    <li className={'sidebar_List_Item'}><AssignmentInd/>
                        관리자 현황
                    </li>
                </ul>
            </div>
        </div>
    </div>
}