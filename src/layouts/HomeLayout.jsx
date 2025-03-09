import Header from "../components/Header";
import Latest from "../components/Latest";
import LeftNavbar from "../components/layout-components/LeftNavbar";
import RightNav from "../components/layout-components/RightNav";
import Navbar from "../components/Navbar";


const HomeLayout = () => {
    return (
        <div>
         <header>
            <Header></Header>
            <section className="w-11/12 mx-auto">
                <Latest></Latest>
            </section>
         </header>
            <nav className="w-11/12 mx-auto">
                <Navbar></Navbar>
            </nav>
         <main className="w-11/12 mx-auto py-2 lg:grid grid-cols-12 gap-4">
             <aside className="left col-span-3">
                <LeftNavbar></LeftNavbar>
             </aside>
             <section className="col-span-6">Main content</section>
             <aside className="col-span-3">
                <RightNav></RightNav>
             </aside>
         </main>
        </div>
    );
};

export default HomeLayout;