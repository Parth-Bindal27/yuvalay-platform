import { useState } from "react";
import { motion } from "framer-motion";
import "./DonationForm.css";

const amounts = [500, 1000, 2500, 5000];

export default function DonationForm() {
  const [selectedAmount, setSelectedAmount] = useState(1000);
  const [customAmount, setCustomAmount] = useState("");

  return (
    <section className="donation-form-section" id="donate-form">

      <motion.div
        className="donation-form-card"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >

        <div className="form-left">

          <span className="section-tag">
            Make a Difference
          </span>

          <h2>
            Support Innovation at Yuvalay
          </h2>

          <p>
            Every contribution empowers students,
            innovators and makers with better opportunities,
            equipment and learning experiences.
          </p>

          <div className="amount-grid">

            {amounts.map((amount) => (

              <button
                key={amount}
                type="button"
                className={
                  selectedAmount === amount
                    ? "amount-btn active"
                    : "amount-btn"
                }
                onClick={() => {
                  setSelectedAmount(amount);
                  setCustomAmount("");
                }}
              >
                ₹{amount}
              </button>

            ))}

          </div>

          <input
            type="number"
            placeholder="Enter Custom Amount"
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelectedAmount("");
            }}
          />

        </div>

        <form className="form-right">

          <input
            type="text"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            placeholder="Email Address"
            required
          />

          <input
            type="tel"
            placeholder="Phone Number"
            required
          />

          <textarea
            rows="5"
            placeholder="Message (Optional)"
          />

          <button type="submit">
            Donate Securely →
          </button>

        </form>

      </motion.div>

    </section>
  );
}