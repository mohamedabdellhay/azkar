import { Header } from "../components/header/header"

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}