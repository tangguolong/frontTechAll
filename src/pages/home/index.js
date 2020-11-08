import React, { useEffect, useState } from 'react'
import { frameName, AllData } from './data'
import './index.scss'
const Home = () => {
    const [chooseIndex, setChooseIndex] = useState('frontFrame')
    const [frontData, setFrontData] = useState('')
    const [allData, setAllData] = useState('')
    const [frameNameData, setFrameNameData] = useState('')
    useEffect(() => {
        setAllData(AllData)
        setFrameNameData(frameName)
    }, [])
    return (
        <div className={'home'}>
            <div className={"header"}>
                <div className="headerBg">
                    <div className="hdContent">首页</div>
                </div>
            </div>
            <div className={"container"}>
                {/* 左右 */}
                <div className={'homeLeft'}>
                    <div className={'homeLeftScroll'}>
                        {
                            frameNameData && frameNameData.map((item, index) => {
                                return <div
                                    onClick={() => { setChooseIndex(item.eName) }}
                                    key={index} className={"leftItem"} style={{ background: chooseIndex == item.eName ? "#de3a31" : '', color: chooseIndex == item.eName ? "#fff" : '' }}>
                                    {
                                        item.name
                                    }
                                </div>
                            })
                        }
                    </div>
                </div>
                <div className={'homeRight'}>

                    {
                        allData[chooseIndex] && allData[chooseIndex].map((item, index) => {
                            return <div key={index} className={'homeRightItem'}>
                                <div onClick={
                                    () => {
                                        window.open(item.url)
                                    }
                                } className={'top'} key={index}>
                                    <div className={'topTitle'}>
                                        {
                                            item.imageUrl.indexOf('http') > -1 ? <img src={item.imageUrl}></img> : (
                                                <div className="cheatImg">{item.imageUrl}</div>
                                            )
                                        }

                                        <div className={'topText'}>{item.name}</div>
                                    </div>
                                    <div className={'topText1'}>{item.desc}</div>
                                </div>
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Home