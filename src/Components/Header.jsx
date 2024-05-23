import { useEffect, useState } from "react";
import styles from './Header.module.css'

const Header = () => {
    const [selectedBtn, setSelectedBtn] = useState("all");

    return (
        <>
            <div className={styles.Container}>
                <div className='logo'>
                    <img src="\public\Foody Zone.svg" alt="logo" />
                </div>
                <div className={styles.search}>
                    {/* <input onChange={searchFood} placeholder="Search Food" /> */}
                    <input  placeholder='Search Food'/>
                </div>
            </div>
            <div className={styles.bttn}>
                <button className={styles.bttFunctionality}>All</button>
                <button className={styles.bttFunctionality}>Breakfast</button>
                <button className={styles.bttFunctionality}>Lunch</button>
                <button className={styles.bttFunctionality}>Dinner</button>
            </div>
        </>
    );
}

export default Header;


// <div className='container'>
//                 <section className='TopContainer'>
//                     <div className="logo">
//                         <img src="\public\Foody Zone.svg" alt="logo" />
//                     </div>
//                     <div className="search">
//                         <input onChange={searchFood} placeholder="Search Food" />
//                     </div>
//           
//                 </section>
//                 <section className='FilterContainer'>
                    
//                     {filterBtns.map((value) => (
//                     <Button
//                         isSelected={selectedBtn === value.type}
//                         key={value.name}
//                         onClick={() => filterFood(value.type)}
//                     >
//                     {value.name}
//                     </Button>
//                     ))}
//                 </section>
//             </div>