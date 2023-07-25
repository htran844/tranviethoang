import '@styles/globals.css'
import SearchNav from "@components/SearchNav";
import Header from '@components/Header';

export const metadata = {
   title: "Phòng học thứ n",
//    icons: {
//     icon: [
//         // "/favicon.ico?v=4"
//         "https://www.sony.com.vn/image/ccbe548efa94995a9c034d96a4a6acbb?fmt=pjpeg&bgcolor=FFFFFF&bgc=FFFFFF&wid=2515&hei=1320"
//     ],
//     apple: [
//         "/apple-touch-icon.png?v=4"
//     ],
//     shortcut: [
//         "/apple-touch-icon.png"
//     ]
//    },
//    manifest: "/site.webmanifest"
  };

const RootLayout = ({ children }) => {
    return (
        <html lang='en'>
            <body>
                <div className="main">
                    <div className="gradient"></div>
                </div>
                <div className="app">
                    {/* <SearchNav/> */}
                    <Header></Header>

                    {children}
                </div>
            </body>
        </html>
    )
}

export default RootLayout