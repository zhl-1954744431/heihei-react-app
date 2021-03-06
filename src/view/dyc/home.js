import React from "react"
import "../../css/home.css"
import Banner from "../../component/Banner"
// import getData from "../../http"
import Works from "./works"
import Content from "./content"
import Characterisitic from "./characteristic"
// import {Link} from "react-router-dom"

function Home(){
    return (
        <div id="home_main">
            {/* 轮播图 */}
            <div className="banner">
                <Banner></Banner>
            </div>
            {/* 报名注册 */}
            <Content></Content>
            {/* VIP会员 */}
            <div className="register_vip">
                <h3>注册成为 妙味VIP会员</h3>
                <div className="register_title">
                    <p>即刻观看妙味历年来超值的实体课程内容。</p>
                    <p>感受正统的前端开发课程体系、体验超值的海量实战案例，凝聚妙味全体讲师知识精华，尽在妙味VIP！</p>
                </div>
                <span>仅需￥199元</span>
                <a href="#">立即报名</a>
            </div>
            {/* 妙味特色 */}
            <Characterisitic></Characterisitic>
            {/* 学员作品 */}
            <Works></Works>
        </div>
    )
}

export default Home;