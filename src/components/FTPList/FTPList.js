import './FTPList.css'

import React from 'react'

const FTPList = () => {

    const data = [
        {
            "name": "ICC FTP Server",
            "link": "http://10.16.100.244"
        },
        {
            "name": "Circle FTP Server",
            "link": "http://circleftp.net"
        },
        {
            "name": "Movie Server",
            "link": "http://103.152.18.18/"
        },
        {
            "name": "Mojaloss FTP Server",
            "link": "http://mojaloss.net/"
        },
        {
            "name": "Discovery FTP",
            "link": "http://discoveryftp.net/"
        },
        {
            "name": "Discovery Movie Server",
            "link": "http://movies.discoveryftp.net/"
        },
        {
            "name": "Dhaka FTP",
            "link": "http://dhakaftp.com/"
        },
        {
            "name": "Dhaka Movie",
            "link": "http://dhakamovie.com/"
        },
        {
            "name": "Nagordola FTP",
            "link": "http://www.nagordola.com.bd/"
        },
        {
            "name": "Nagordola FTP Live",
            "link": "http://nagordola.live/"
        },
        {
            "name": "FTPBD net",
            "link": "http://ftpbd.net/"
        },
        {
            "name": "FTP BD",
            "link": "http://server2.ftpbd.net/"
        },
        {
            "name": "Link3 FTP",
            "link": "http://www.cinehub24.com/"
        },
        {
            "name": "Amber IT FTP Server",
            "link": "http://binodonmela.net/"
        },
        {
            "name": "Movie Haat",
            "link": "http://moviehaat.net/"
        },
        {
            "name": "Movie Mela",
            "link": "http://www.moviemela..live/"
        },
        {
            "name": "BongoBD",
            "link": "https://bongobd.com/"
        },
        {
            "name": "Cinema Bazar",
            "link": "http://103.81.104.98/"
        },
        {
            "name": "Alpha Media",
            "link": "http://ftp.alphamediazone.com/"
        },
        {
            "name": "Bangla Movie",
            "link": "https://www.bongobd.com/bn/movies"
        },
        {
            "name": "Data Server",
            "link": "http://103.85.156.222/data/"
        },
        {
            "name": "VDO Mela",
            "link": "http://vdomela.com/"
        },
        {
            "name": "Game Server",
            "link": "http://mangogamers.com/"
        },
        {
            "name": "City Cloud",
            "link": "http://103.102.253.250/"
        },
        {
            "name": "Dekhvhai FTP",
            "link": "http://dekhvhai.com/"
        },
        {
            "name": "English Movie",
            "link": "http://45.120.114.222/HDD5/English%20Movies/"
        },
        {
            "name": "Ebox FTP",
            "link": "http://fileserver.ebox.live/"
        },
        {
            "name": "Ebox 2 FTP",
            "link": "http://fileserver.ebox.live/movies"
        },
        {
            "name": "Roar Zone",
            "link": "https://roarzone. info/"
        },
        {
            "name": "Roar Media",
            "link": "http://cdn.roarmediazone. com/"
        },
        {
            "name": "Net Code",
            "link": "http://netcode.live/netcodemedia/"
        },
        {
            "name": "Panda Club",
            "link": "http://showtimebd.com/"
        },
        {
            "name": "Kalponik FTP",
            "link": "http://www.kalponik.net.bd/"
        },
        {
            "name": "BD Lan",
            "link": "https://bdlan.net/"
        },
        {
            "name": "Explore Online",
            "link": "http://103.222.20.150/"
        },
        {
            "name": "Khulna Plex",
            "link": "http://khulnaplex.net/"
        },
        {
            "name": "S-flix",
            "link": "http://cdn.s-flix.com/"
        },
        {
            "name": "Alif Laila FTP",
            "link": "http://aliflailabd.com/"
        },
        {
            "name": "Alif Laila 2",
            "link": "http://ftp1.aliflailabd.com/"
        },
        {
            "name": "NBD FTP",
            "link": "https://nbd-media.tk/"
        },
        {
            "name": "BusNet BD",
            "link": "http://movie.basnetbd.com/"
        },
        {
            "name": "Bee flix FTP",
            "link": "https://beeflix.biz/"
        },
        {
            "name": "Boss BD",
            "link": "http://www.bossbd.net/"
        },
        {
            "name": "Fun Time BD FTP",
            "link": "http://funtimebd.com/"
        },
        {
            "name": "DFN DB",
            "link": "http://media.dfnbd.net/"
        },
        {
            "name": "Spark NET BD",
            "link": "https://sparknetbd.com/"
        },
        {
            "name": "CrazyHD",
            "link": "https://www.crazyhd.com/"
        },
        {
            "name": "Torrent BD",
            "link": "https://www.torrentbd.com/"
        },
        {
            "name": "Sam Online FTP",
            "link": "https://samftp.com/"
        },
        {
            "name": "Net at Home BD",
            "link": "https://www.netathomebd.com/"
        },
        {
            "name": "JDIX",
            "link": "http://162.12.215.254/"
        },
        {
            "name": "CrazyCTG FTP",
            "link": "http://crazyctg.com/"
        },
        {
            "name": "MybdPlex",
            "link": "http://mybdplex.com/"
        },
        {
            "name": "Elaach FTP BD",
            "link": "http://elaach.com/"
        },
        {
            "name": "Kurigram",
            "link": "http://103.119.100.54/"
        },
        {
            "name": "Ant House BD",
            "link": "http://www.anthousebd.net/"
        },
        {
            "name": "Net Matrix BD",
            "link": "http://media.netmatrixbd.com/"
        },
        {
            "name": "Quick Online",
            "link": "http://quickonlineftp.com/"
        },
        {
            "name": "Kiss Anime Server",
            "link": "https://kissanime.ru/"
        },
        {
            "name": "Movie Box BD",
            "link": "http://movieboxbd.com/"
        },
        {
            "name": "CTG Hall",
            "link": "http://www.ctghall.com/"
        },
        {
            "name": "IT Base BD",
            "link": "http://103.70.140.14/"
        },
        {
            "name": "Rangdhanu Server",
            "link": "https://www.rangdhanu.live/"
        },
        {
            "name": "Ihub FTP",
            "link": "http://ihub.live/"
        },
        {
            "name": "EVO Net BD",
            "link": "http://www.evonetbd.com/"
        },
        {
            "name": "Small Screen FTP",
            "link": "http://103.3.226.208/"
        },
        {
            "name": "Free Download FTP",
            "link": "http://www.freedownloadbd.com/"
        },
        {
            "name": "Mazeda Network FTP",
            "link": "https://www.mazedanetworks.net/"
        },
        {
            "name": "Mojar FTP",
            "link": "http://www.mojarftp.com/"
        },
        {
            "name": "Infolink FTP",
            "link": "https://infolinkbd.com/"
        },
        {
            "name": "Asian NET FTP",
            "link": "http://asianftp.com/"
        },
        {
            "name": "DOT Internet FTP",
            "link": "http://www.dotinternetbd.com/"
        },
    ]

    const listItems = data.map(
        (element) => {
            return (
                <div className='main'>
                    <div className='glass'>
                        <div className='head align-middle'>
                            <div className='title'>
                                <h1>{ element.name }</h1>
                            </div>
                            <div className='button'>
                                <div className=''>
                                    <a href={ element.link } target="_blank">
                                        <button class="btnn"><h3>{ element.name }</h3></button>
                                    </a>
                                    {/* <button className='btn'><a href={ element.link }><h3>{ element.name }</h3></a></button> */}
                                </div>
                            </div>
                        </div>

                        <div className='body'>
                            <iframe src={ element.link } scrolling="no" title={ element.name }></iframe>
                        </div>
                    </div>
                </div>
            )
        }
    )

  return (
    <div className='grid-container'>{ listItems }</div>
  )
}

export default FTPList