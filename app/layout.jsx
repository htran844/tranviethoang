import '@styles/globals.css'
import SearchNav from "@components/SearchNav";
import Header from '@components/Header';


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