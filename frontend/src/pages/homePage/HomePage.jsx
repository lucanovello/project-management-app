import homePageStyle from './HomePage.module.css';
import { FaCalendarAlt } from 'react-icons/fa';

function HomePage() {
    return (
        <main className={homePageStyle.homePageContainer}>
            <header className={homePageStyle.homePageHeaderContainer}>
                <h2 className={homePageStyle.homePageHeaderText}>
                    Revolutionize Your Team Building and Communication Efforts with TeamBuilder!
                </h2>
                <FaCalendarAlt className={homePageStyle.homePageHeaderIcon} />
            </header>
            <section className={homePageStyle.homePageSection1Container}>Section 1</section>
            <section className={homePageStyle.homePageSection2Container}>Section 2</section>
            <footer className={homePageStyle.homePageFooterContainer}>Footer</footer>
        </main>
    );
}

export default HomePage;
