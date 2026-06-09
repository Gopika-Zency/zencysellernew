import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      question: "What is Zency, and how does it work?",
      answer: `Zency is India’s first fashion and lifestyle quick commerce platform that enables sellers to reach customers with ultra-fast deliveries (15 min). We store your products in our dark store, and when a customer places an order, we handle the fulfilment and delivery, ensuring a seamless experience and better brand positioning.`,
      expanded: false
    },
    {
      question: "Why should I register as a seller on Zency?",
      answer: `Zency provides access to a growing customer base in urban India, faster order fulfilment, warehouse storage, seamless logistics, and quick payments. Our model helps you increase sales while reducing the hassle of managing inventory and delivery. We also improve marketing and visibility of D2C Brands for more sales and brand learning.`,
      expanded: false
    },
    {
      question: "What are the eligibility criteria to become a seller on Zency?",
      answer: `
        You need a valid GSTIN, a registered business entity, a bank account, and a product Catalog for your eligible category (fashion, footwear, small electronic goods, accessories, bags and so on).<br><br>
        Sellers must provide:
        <ul>
          <li>GSTIN (Goods & Services Tax Identification Number)</li>
          <li>PAN Card (Business or Personal)</li>
          <li>Bank Account Details</li>
          <li>Business Address Proof</li>
          <li>Product Listings (with images, descriptions, and pricing)</li>
          <li>Any additional details as per the Vendor Registration Form</li>
          <li>Onboarding Team will help out in case of any confusion</li>
        </ul>
      `,
      expanded: false
    },
    {
      question: "How do I register as a seller on Zency and How long it takes?",
      answer: `Currently, we are at the commencement stage of onboarding sellers. To begin, we will share a Vendor Registration Form (VRF) along with an Item Master Sheet for you to fill in with your business and product details. We’re currently running a D2C Seller Scaleup Program that’s limited to only first few vendors that offers $100 of Ad Credits and lowest commission with no dark store charges.<br><br>
      Once you complete and submit these files, our team will verify the information. After successful verification, we will proceed with the next steps to onboard you as a seller on Zency.<br><br>
      To assist you, Zency will also provide Ready Reckoner Files to guide you in filling out the sheets. If you need any clarifications, our team will be available to assist you.<br><br>
      Usually it takes around a week for your verification and quality check (You may need to ship a sample) once verified your product gets live within 3 days as we receive your consignment.`,
      expanded: false
    },
    {
      question: "Is there any registration or subscription fee?",
      answer: `No, Zency does not charge any registration or listing fee. However, we charge a commission on successful sales based on product categories. As a part of D2C Seller Scaleup Program dark store charges are also waived off.`,
      expanded: false
    },
    {
      question: "What commission does Zency charge?",
      answer: `Our commission structure varies by category. Once you sign up, we will provide a detailed breakdown for each category. For fashion, footwear and accessories we charge a flat 25% commission that can be reduced to 20% if your product performs better on the platform.`,
      expanded: false
    },
    {
      question: "How and when will I receive payments?",
      answer: `Zency processes payments directly to your bank account within a set payment cycle (bi-weekly). Payment details will be available in your seller dashboard.`,
      expanded: false
    },
    {
      question: "Can I set my own prices for products?",
      answer: `Yes, you control product pricing. However, competitive pricing helps boost sales. You also control offers that run on your products and Zency helps you to run better offers for higher sales.`,
      expanded: false
    },
    {
      question: "How does the order fulfilment process work with Zency?",
      answer: `Once you list your products, Zency recommends dark stores which are better for your product and category. Sellers need to ship consignment to those particular dark stores. Zency stores them with full safety, while they’re live on the platform. When a customer places an order, Zency picks, packs, and delivers the product quickly, with a seamless experience of 15 min delivery. You don’t need to worry about logistics or managing deliveries.`,
      expanded: false
    },
    {
      question: "Who manages delivery and returns?",
      answer: `Zency handles all deliveries from our dark stores to the customer. If a product is returned due to damage, defects, or customer rejection, Zency will process and manage the return.`,
      expanded: false
    },
    {
      question: "Can I sell multiple product categories on Zency?",
      answer: `Yes, as long as your products fall within our eligible categories and meet quality standards.`,
      expanded: false
    },
    {
      question: "How do I manage my inventory with Zency?",
      answer: `Since Zency stores your inventory in our dark stores, you will have access to a seller dashboard where you can track stock levels, update product details, and monitor sales. Zency also provides analytics of demand and supply helping you to focus on demanded product categories.`,
      expanded: false
    },
    {
      question: "Does Zency offer marketing and promotions for sellers?",
      answer: `Yes, Zency runs promotional campaigns, discounts, and in-app marketing to enhance product visibility. Sellers can also opt for paid promotions for additional reach. As a part of Sellers Scaleup Program you also get a free $100 Ad Credit that can be utilized to run promotions. You will also need to provide high-definition images of your products and brand logo. In case there’s an issue with your product images our team will get back.`,
      expanded: false
    },
    {
      question: "What kind of sales insights and analytics will I get?",
      answer: `Zency’s seller dashboard provides real-time sales data, inventory status, customer demand trends, and revenue insights to help you make informed decisions.`,
      expanded: false
    },
    {
      question: "What happens if a product remains unsold for a long time?",
      answer: `If a product is not sold over an agreed period, Zency may replace it as part of our stock correction practice to ensure optimal inventory turnover. In such condition our seller relationship managers help you to get rid of ageing stock by running optimal offers in worst case it may be off the live stock where it has to be shipped back to the seller.`,
      expanded: false
    },
    {
      question: "How can I contact Zency’s seller support team?",
      answer: `Zency offers dedicated seller support to assist with onboarding, order management, payments, and any other concerns. You can reach us via email, chat, or phone support 24X7.`,
      expanded: false
    },
    {
      question: "Zency is a new platform. Why should I trust it?",
      answer: `Zency is backed by a strong logistics, innovative AI enabled technologies and warehouse model, ensuring fast delivery and smooth seller operations. We are launching in the next two months with a focus on high-demand categories, making it a great opportunity for early sellers to gain visibility in the growing market. More than 100 Sellers are already onboard on Zency and by end of 2025 we are coming up with 50 Dark Stores and 2000 sellers.`,
      expanded: false
    },
    {
      question: "How does Zency ensure fast deliveries?",
      answer: `Since Zency operates on a dark store model, we store products closer to customers, our AI enabled tech makes sure your product is stored nearest to the location where customers have high demand of your category enabling ultra-fast deliveries in minutes.`,
      expanded: false
    },
    {
      question: "What product categories does Zency focus on?",
      answer: `Zency primarily focuses on fashion products including footwear and jewellery, beauty section, with additional categories like portable electronics, accessories, and bags. We aim to expand further based on customer demand.`,
      expanded: false
    },
    {
      question: "How will my products be listed on Zency?",
      answer: `Once you submit the Item Master Sheet with product details (images, descriptions, and pricing), our team will verify and upload your products onto the Zency platform. Once uploaded you will get a notification.`,
      expanded: false
    },
    {
      question: "Where is Zency located?",
      answer: `Zency is headquartered in Mumbai.`,
      expanded: false
    },
    {
      question: "Can I sell across multiple cities through Zency?",
      answer: `Yes, as Zency expands to multiple cities, your products will be made available in those locations where we operate. You can also sell across multiple categories.`,
      expanded: false
    },
    {
      question: "Do I have to pay packaging charges?",
      answer: `No, Zency takes care of last mile packaging and delivery for you with an amazing customer experience. However, we can customise delivery experience for you if you want to send some free gifts and goodies along.`,
      expanded: false
    },
    {
      question: "Can I have our own branded bags for delivery?",
      answer: `Yes, you can have and will need to send your goods individually packed in your own brand wraps, however to ensure the safety of product delivery Zency repackages it on the company labelled bag, box or wraps over it.`,
      expanded: false
    },
    {
      question: "Under what circumstances our brand may not be selected for listing on Zency?",
      answer: `While Zency ensures to boost sellers and improve their sales across various categories, your product may receive a reconsideration mail if consignment is received damaged or products are damaged. In such cases our seller relationship team will help you to fix the consignment.`,
      expanded: false
    }
  ];

  toggleFAQ(index: number) {
    this.faqs.forEach((faq, i) => {
      faq.expanded = i === index ? !faq.expanded : false;
    });
  }
}
