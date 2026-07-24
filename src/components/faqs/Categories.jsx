import "./categories.css";
import {
  FiGrid,
  FiBookOpen,
  FiCalendar,
  FiCpu,
  FiUsers,
  FiHeart,
  FiGift,
  FiHelpCircle,
} from "react-icons/fi";

const categories = [
  {
    icon: <FiHelpCircle />,
    title: "General",
  },
  {
    icon: <FiBookOpen />,
    title: "Programs",
  },
  {
    icon: <FiCpu />,
    title: "Makerspace",
  },
  {
    icon: <FiCalendar />,
    title: "Events",
  },
  {
    icon: <FiUsers />,
    title: "Partnerships",
  },
  {
    icon: <FiHeart />,
    title: "Volunteering",
  },
  {
    icon: <FiGift />,
    title: "Donations",
  },
  {
    icon: <FiGrid />,
    title: "More",
  },
];

export default function Categories() {
  return (
    <section className="faqCategories">

      <div className="faqCategoriesContainer">

        {categories.map((item, index) => (

          <div
            className="faqCategoryCard"
            key={index}
          >

            <div className="faqCategoryIcon">

              {item.icon}

            </div>

            <h3>{item.title}</h3>

          </div>

        ))}

      </div>

    </section>
  );
}