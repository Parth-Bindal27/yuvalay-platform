import { motion } from "framer-motion";
import {
  FaUniversity,
  FaMobileAlt,
  FaQrcode,
  FaShieldAlt,
} from "react-icons/fa";

import "./DonationMethods.css";

export default function DonationMethods() {
  return (
    <section className="donation-methods">

      <div className="methods-heading">

        <span className="section-tag">
          Secure Donations
        </span>

        <h2>
          Multiple Ways
          to Support Yuvalay
        </h2>

        <p>
          Choose the donation method that's most convenient
          for you. Every contribution helps empower the next
          generation of innovators.
        </p>

      </div>

      <div className="methods-grid">

        <motion.div
          className="method-card"
          whileHover={{ y: -8 }}
        >
          <FaMobileAlt className="method-icon"/>

          <h3>UPI</h3>

          <p>Will Update Soon</p>

          <button>
            Copy UPI ID
          </button>

        </motion.div>

        <motion.div
          className="method-card"
          whileHover={{ y: -8 }}
        >
          <FaQrcode className="method-icon"/>

          <h3>Scan QR Code</h3>

          <div className="qr-placeholder">

            QR CODE

          </div>

          <small>
            Replace with official QR
          </small>

        </motion.div>

        <motion.div
          className="method-card"
          whileHover={{ y: -8 }}
        >
          <FaUniversity className="method-icon"/>

          <h3>Bank Transfer</h3>

          <p><strong>Account:</strong> XXXXXXXXXX</p>

          <p><strong>IFSC:</strong> XXXXXXXX</p>

          <p><strong>Bank:</strong> SBI</p>

        </motion.div>

      </div>

      <motion.div
        className="secure-banner"
        initial={{ opacity:0,y:40 }}
        whileInView={{ opacity:1,y:0 }}
        viewport={{ once:true }}
      >

        <FaShieldAlt />

        <div>

          <h3>100% Transparent Donations</h3>

          <p>
            Every donation is used responsibly to support
            education, innovation, community outreach and
            makerspace development.
          </p>

        </div>

      </motion.div>

    </section>
  );
}