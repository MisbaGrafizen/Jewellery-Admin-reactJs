import { Grape } from 'lucide-react'

import GreetingCard from '../../Component/Default/GreetingCard'
import React, { Fragment } from "react";
import { Container, Row } from "reactstrap";
import { Breadcrumbs } from "../../AbstractElements";
import '../../assetsMain/Style.css'
// import '../../assetsMain/Style.css.map'
import OverallBalance from "../../Component/Default/OverallBalance";

import WidgetsWrapper from "../../Component/Default/WidgetsWraper";
import RecentOrders from "../../Component/Default/RecentOrders";
import ActivityCard from "../../Component/Default/ActivityCard";
import RecentSales from "../../Component/Default/RecentSales";
import TimelineCard from "../../Component/Default/TimelineCard";
import PreAccountCard from "../../Component/Default/PreAccountCard";
import TotalUserAndFollower from "../../Component/Default/TotalUserAndFollower";
import PaperNote from "../../Component/Default/PaperNote";
import SideBar from '../../Component/sidebar/SideBar';
import Header from '../../Component/header/Header';

export default function DashBoard() {
  return (
   <>
   
  <section className="flex w-[100%] h-[100%] select-none p-[15px] overflow-hidden">
        <div className="flex w-[100%] flex-col gap-[14px] h-[96vh]">
          <Header pageName="Dashboard" />
          <div className="flex gap-[10px] w-[100%] h-[100%]">
            <SideBar />
            <div className="flex flex-col w-[100%] max-h-[90%] pb-[50px] pr-[15px] overflow-y-auto gap-[30px] rounded-[10px]">
   <Fragment>
      <Breadcrumbs mainTitle="Default" parent="Dashboard" title="Default" />
      <Container fluid={true}>
        <Row className="widget-grid">
          <GreetingCard />
          <WidgetsWrapper />
          <OverallBalance />
          <RecentOrders />
          <ActivityCard />
          <RecentSales />
          <TimelineCard />
          <PreAccountCard />
          <TotalUserAndFollower />
          <PaperNote />
        </Row>
      </Container>
    </Fragment>

            </div>

            </div>
            </div>
            </section>





   </>
  )
}
