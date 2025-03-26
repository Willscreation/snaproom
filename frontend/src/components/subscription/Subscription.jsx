import React from "react";
import "./style/Subscription.css";

const Subscription = () => {
  return (
    <div>
      <div className="main-card">
        <div className="card">
          <h1>Free Plan (Basic) </h1>
          <h2>💰 $0/month </h2>
          <ul>
            <li>🔹 Upload Limit: Up to 150 images per event</li>
            <li>🔹 Storage: 2GB total</li>
            <li>🔹 Access: Share images with 5 people</li>
          </ul>
          <h3>Features:</h3>
          <ul>
            <li>✅ Basic image uploads</li>
            <li>✅ Download shared images</li>
            <li>✅ Secure event ID & password</li>
          </ul>
          <button className="btn">Purchase</button>
        </div>
        <div className="card">
          <h1>Premium Plan</h1>
          <h2>💰 $4.99/month</h2>
          <ul>
            <li>🔹 Upload Limit: Up to 150 images per event</li>
            <li>🔹  Storage: 10GB total</li>
            <li>🔹 Access: Share images with unlimited friends</li>
          </ul>
          <h3>Features:</h3>
          <ul>
            <li>✅ Everything in Free Plan +</li>
            <li>✅ High-speed uploads & downloads</li>
            <li>✅ AI-powered image enhancements</li>
            <li>✅ Priority customer support</li>
          </ul>
          <button className="btn">Purchase</button>
        </div>
        <div className="card">
          <h1> Pro Plan  </h1>
          <h2>💰 $9.99/month</h2>
          <ul>
            <li>🔹 Upload Limit: Unlimited images per event</li>
            <li>🔹 Storage: 100GB total</li>
            <li>🔹  Access: No sharing limits</li>
          </ul>
          <h3>Features:</h3>
          <ul>
            <li>✅ Everything in Premium Plan +</li>
            <li>✅ Custom branding (your logo on shared images)
            </li>
            <li>✅ Private galleries with link protection</li>
            <li>✅ Cloud backup & restore</li>
          </ul>
          <button className="btn">Purchase</button>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
