export default function Pricing() {
  return (
    <div className="w-full max-w-4xl mx-auto py-12 md:py-16">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Our Services and Pricing
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-slate-800">
              <th className="px-4 py-3 text-left font-medium">Service</th>
              <th className="px-4 py-3 text-left font-medium">Description</th>
              <th className="px-4 py-3 text-right font-medium">Silver</th>
              <th className="px-4 py-3 text-right font-medium">Gold</th>
              <th className="px-4 py-3 text-right font-medium">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Website Design</td>
              <td className="px-4 py-3 text-muted-foreground">
                Custom design and development of a responsive, modern website.
              </td>
              <td className="px-4 py-3 text-right font-medium">$1,500</td>
              <td className="px-4 py-3 text-right font-medium">$2,500</td>
              <td className="px-4 py-3 text-right font-medium">$3,500</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Website Development</td>
              <td className="px-4 py-3 text-muted-foreground">
                Building a fully functional website with a content management
                system.
              </td>
              <td className="px-4 py-3 text-right font-medium">$2,500</td>
              <td className="px-4 py-3 text-right font-medium">$4,000</td>
              <td className="px-4 py-3 text-right font-medium">$6,000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">E-commerce Integration</td>
              <td className="px-4 py-3 text-muted-foreground">
                Integrating an e-commerce platform with your website for
                seamless online sales.
              </td>
              <td className="px-4 py-3 text-right font-medium">$2,000</td>
              <td className="px-4 py-3 text-right font-medium">$3,500</td>
              <td className="px-4 py-3 text-right font-medium">$5,000</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">SEO Optimization</td>
              <td className="px-4 py-3 text-muted-foreground">
                Optimizing your website for better search engine visibility and
                higher rankings.
              </td>
              <td className="px-4 py-3 text-right font-medium">$800</td>
              <td className="px-4 py-3 text-right font-medium">$1,200</td>
              <td className="px-4 py-3 text-right font-medium">$1,800</td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-3 font-medium">Ongoing Maintenance</td>
              <td className="px-4 py-3 text-muted-foreground">
                Regular updates, security patches, and performance optimizations
                for your website.
              </td>
              <td className="px-4 py-3 text-right font-medium">$300/month</td>
              <td className="px-4 py-3 text-right font-medium">$500/month</td>
              <td className="px-4 py-3 text-right font-medium">$800/month</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
