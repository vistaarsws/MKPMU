import "./Impact.css";
import ComparisonSlider from "../../components/layout/ComparisonSlider/ComparisonSlider";
import DataTable from "../../components/ui/Table/DataTable";

import modi_Irrigation from "../../assets/images/modi_Irrigation.png";
import wheatMetricData from "../../assets/images/impact_wheatMetric.png";
import procurementData_1 from "../../assets/images/procurementfinal.png";
import procurementData_2 from "../../assets/images/procurementvalue.png";

import droughtImg from "../../assets/images/droughtImg.png";

import gpsViewData_1 from "../../assets/images/gpsViewData_1.png";
import EnhanceExcess_1 from "../../assets/images/ndvi_plots.png";

import energyConservation from "../../assets/images/energyconservation.jpg";

import gpsViewData_2 from "../../assets/images/gpsViewData_2.png";
import irrigationData from "../../assets/images/irrigationData.png";

import areaEVI from "../../assets/images/areaEVI.jpg";

import imagePageMap from "../../assets/images/impactPageMap.png";
import { PieChart } from "react-minimal-pie-chart";

export default function Impact() {
  const data = [
    { title: "Non-irrigated Area", value: 704000, color: "#E38627" },
    { title: "Irrigated Area", value: 60000, color: "#4caf50" },
  ];

  const tableData1 = {
    headers: [
      "Name of Project",
      "Year of commissioning",
      "Storage for Irrigation (Mm3)",
      "Irrigation Area in ha",
      "IA per Mm3 of live storage",
    ],

    data: [
      {
        "Name of Project": "Mahi Project",
        "Year of commissioning": 2012,
        "Storage for Irrigation (Mm3)": 123.44,
        "Irrigation Area in ha": "28,127",
        "IA per Mm3 of live storage": 228,
      },
      {
        "Name of Project": "Pench Project",
        "Year of commissioning": 2018,
        "Storage for Irrigation (Mm3)": 391.2,
        "Irrigation Area in ha": "85,000",
        "IA per Mm3 of live storage": 217,
      },
      {
        "Name of Project": "Mohanpura - Right Bank",
        "Year of commissioning": 2019,
        "Storage for Irrigation (Mm3)": 51.71,
        "Irrigation Area in ha": "25,600",
        "IA per Mm3 of live storage": 495,
      },
    ],
  };

  const tableData2 = {
    headers: [
      "Name of Project",
      "Year of commissioning",
      "Storage for Irrigation (Mm3)",
      "Irrigation Area in ha",
      "IA per Mm3 of live storage",
    ],

    data: [
      {
        "Name of Project": "Mahi Project",
        "Year of commissioning": 2012,
        "Storage for Irrigation (Mm3)": 123.44,
        "Irrigation Area in ha": "28,127",
        "IA per Mm3 of live storage": 228,
      },
      {
        "Name of Project": "Pench Project",
        "Year of commissioning": 2018,
        "Storage for Irrigation (Mm3)": 391.2,
        "Irrigation Area in ha": "85,000",
        "IA per Mm3 of live storage": 217,
      },
      {
        "Name of Project": "Mohanpura- Right Bank",
        "Year of commissioning": 2019,
        "Storage for Irrigation (Mm3)": 51.71,
        "Irrigation Area in ha": "25,600",
        "IA per Mm3 of live storage": 495,
      },
    ],
  };

  const tableData3 = {
    headers: ["Parameter", "Unit", "VT Pump"],
    data: [
      { sectionHeader: "VT PUMP INTAKE PUMPING STATION" },
      { Parameter: "Total Head (H)", Unit: "m", "VT Pump": 72 },
      { Parameter: "Discharge (Q)", Unit: "m3/hr", "VT Pump": "31,320.0" },
      { Parameter: "Pump Efficiency", Unit: "%", "VT Pump": "88.0%" },
      { Parameter: "Motor Efficiency", Unit: "%", "VT Pump": "95.0%" },
      {
        Parameter: "Power Consumption @ Motor Terminal",
        Unit: "kW",
        "VT Pump": "7307.44",
      },

      { sectionHeader: "BOOSTER PUMPS (AREA D)" },
      { Parameter: "Total Head (H)", Unit: "m", "VT Pump": 16 },
      { Parameter: "Discharge (Q)", Unit: "m3/hr", "VT Pump": "390.50" },
      { Parameter: "Pump Efficiency", Unit: "%", "VT Pump": "87.0%" },
      { Parameter: "Motor Efficiency", Unit: "%", "VT Pump": "91.7%" },
      { Parameter: "Power Consumption", Unit: "kW", "VT Pump": "21.33" },

      { sectionHeader: "BOOSTER PUMPS (KALIPETH)" },
      { Parameter: "Total Head (H)", Unit: "m", "VT Pump": 26 },
      { Parameter: "Discharge (Q)", Unit: "m3/hr", "VT Pump": "18,190" },
      { Parameter: "Pump Efficiency", Unit: "%", "VT Pump": "89.5%" },
      { Parameter: "Motor Efficiency", Unit: "%", "VT Pump": "95.0%" },
      { Parameter: "Power Consumption", Unit: "kW", "VT Pump": "1595.00" },

      {
        Parameter: "Total Power Consumption for Sub-Project",
        Unit: "kW",
        "VT Pump": "8924",
      },
    ],
  };

  const tableData4 = {
    title: "Power Calculations For 1 Ha by Individual Farmer",
    headers: ["Parameter", "Unit", "VT Pump"],
    data: [
      { sectionHeader: "Power Calculations For 1 Ha by Individual Farmer" },
      {
        Parameter: "Static Head in Bore well",
        Unit: "m",
        "VT Pump": 100,
      },
      {
        Parameter: "Residual Head for Sprinklers",
        Unit: "m",
        "VT Pump": 20,
      },
      {
        Parameter: "Minor & Frictional Losses",
        Unit: "m",
        "VT Pump": 10,
      },
      {
        Parameter: "Total Head (H)",
        Unit: "m",
        "VT Pump": 130,
      },
      {
        Parameter: "Discharge (Q)",
        Unit: "m³/hr",
        "VT Pump": "1.22*",
      },
      {
        Parameter: "Pump Set Efficiency",
        Unit: "%",
        "VT Pump": "46%**",
      },
      {
        Parameter: "Power Consumption",
        Unit: "kW",
        "VT Pump": 0.73,
      },
      {
        Parameter: "Power Consumption for 25,600 Ha",
        Unit: "kW",
        "VT Pump": 18693,
      },
    ],
  };

  const tableData5 = {
    headers: ["Parameter", "Unit", "Value"],
    data: [
      {
        Parameter: "Excess Power Consumption",
        Unit: "kW",
        Value: 9770,
      },
      {
        Parameter: "Number of pump operating hours in a day",
        Unit: "Hrs",
        Value: 8,
      },
      {
        Parameter: "No. of days in Irrigation Season",
        Unit: "Nos",
        Value: 120,
      },
      {
        Parameter: "Excess Energy Consumption in Irrigation Season",
        Unit: "kW-hr",
        Value: 93784130,
      },
    ],
  };

  return (
    <div className="impactPage_container">
      <article>
        <h1>A landmark Project; A Lifelong Impact</h1>
        <p>
          A story of revolution that transformed thousands of lives and will
          impact millions more in the future.
        </p>
      </article>
      <ComparisonSlider />

      <article>
        <section>
          <figure>
            <img src={droughtImg} alt="" />
          </figure>
          <div>
            <h2>Why?</h2>
            <h3>Less Than 10% of Land Was Irrigated Before the Project.</h3>
            <p>
              Rajgarh, the westernmost district of MP bordering the arid state
              of Rajasthan, was on the verge of desertification. Out of the 7.05
              lakh hectares of agricultural land, only 60,000 hectares were
              being irrigated through available resources. This severe scarcity
              of irrigation water created hardship for local farmers, who were
              forced to either migrate or—in desperate circumstances—turn to
              crime to survive, as they lacked sufficient water to irrigate
              their farmlands.
            </p>
          </div>
        </section>
        <section>
          <figure>
            <img src={imagePageMap} alt="" />
          </figure>
          <div>
            <PieChart
              data={data}
              label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`} // Display percentage
              labelStyle={{
                fontSize: "0.6rem",
                fontWeight: 600,
                fontFamily: "sans-serif",
                fill: "#fff",
              }}
              labelPosition={50} // Adjust position of the label
            />

            <div
              style={{
                display: "flex",
                gap: "2rem",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              {data.map((entry, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "15px",
                      height: "15px",
                      backgroundColor: entry.color,
                      marginRight: "10px",
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span style={{ fontSize: "14px", fontFamily: "sans-serif" }}>
                    {entry.title}: {entry.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      <article className="card-container">
        <div className="left-section">
          <img src={modi_Irrigation} alt="PM Modi" className="image" />
        </div>

        <div className="right-section">
          <h2>
            <span className="solution-title">Solution</span>
          </h2>
          {/* <h3 className="content-title">Blossoming Prosperity</h3> */}
          <p>
            In 2014, under PM Narendra Modi's vision of "Har Khet ko Paani," the
            construction of two major dams—Mohanpura and Kundalia—began in
            Rajgarh, one of the driest districts of Madhya Pradesh. Within a
            record time of three years, the construction of both dams was
            completed, and in June 2018, the Honorable Prime Minister
            inaugurated the Mohanpura Irrigation Project.
          </p>
          <p>
            Both dams created a combined storage of 1,200 MCM, which could
            irrigate around 1.2 lakh hectares through an open canal system.
          </p>
          <p>
            In 2018, therefore, a dedicated PMU was established which deployed
            the innovative technology of pressurized piped irrigation to deliver
            water directly from the reservoir to farm level. Hence, known as the
            Mohanpura Model
          </p>
        </div>
      </article>
      <article className="result_box">
        <h2>Result</h2>
        <p>
          Since then, a herculean infrastructure has been created, consisting of
          26,000 km of underground pipelines that pump water through 20 pumping
          stations using 130 MW of electricity, irrigating a contiguous area of
          290,000 hectares.
        </p>
        <p>
          This state-of-the-art technology has directly improved the lives of
          more than a million people across over 1,300 villages.
        </p>
      </article>
      <article className="waterEfficiency_container">
        <span>
          NOTE: Data represents outcomes from 2019 to 2022 for a 25,600-hectare
          sub-project.
        </span>
        <div>
          <h2>Improved Water Use Efficiency</h2>
          <p>
            Since the commissioning of the sub-project in the year 2019,
            irrigation water has been delivered to the command area in 3 Rabi
            (winter) crop seasons. The year wise total irrigation water
            delivered along with the command area is indicated below (Table-1)
            and this data is derived from SCADA system of the sub-project. From
            the details it is observed that, actual duty/ flowrate required in
            the field is approximately 0.28 lps/ha as against 0.34 lps/ha for
            which the sub-project is designed (Table-1). This is well below the
            duty or flowrates adopted in open canal systems which are in the
            range of 0.6 lps/ha to 1.2 lps/ha. If the trend continues for a
            longer period of time, it would indicate that the crop water
            requirement calculations adopted are on a very conservative side and
            could require review.
          </p>
          <DataTable headers={tableData1.headers} data={tableData1.data} />

          <p>
            If similar irrigated area were to be developed using the best
            performing young projects in the State based on gravity based open
            canal system, then the water requirement at reservoir would have
            been in the range of 110-120 Mm3. This comparison is shown in
            Table-2:
          </p>
          <DataTable headers={tableData2.headers} data={tableData2.data} />
          <p>
            It may be deduced that water use efficiency for irrigation can be
            improved in the range of 2.1 to 2.3 times with adoption of PIN upto
            farm level (1.2 ha) coupled with SCADA and automation.
          </p>
        </div>
      </article>
      <article className="cropProduction_container">
        <h2>Surge in Crop Production</h2>
        <p>
          The project authorities, working closely with the district
          administration, came to know of a sudden spurt in crop production
          after the impounding of water in Mohanpura dam in 2018 and
          commissioning of Mohanpura Right Bank sub-project in 2019. To
          understand the interlinkage, government wheat procurement data for the
          district was obtained (of cooperative societies/markets in India where
          minimum support price (MSP) crops are procured). This procurement
          quantities are only an indicator of full production as farmers retain
          certain quantities for purposes of seed as well as domestic
          consumption.
        </p>
        <figure style={{ display: "flex", flexWrap: "wrap" }}>
          <img src={procurementData_1} alt="" />
        </figure>
        <figure>
          <img src={procurementData_2} alt="" />
        </figure>
        <p>
          In the above figure, we see a slight increase in production with
          increased impounding of water in Mohanpura reservoir in 2018-19 when
          compared to pre-project levels of production. After commissioning of
          the sub-project under study in 2019, there is a sudden surge in wheat
          procurement from 150,000 MT to more than 350,000 MT. Though not all
          increase may be ascribed to the sub-project, there appears a definite
          linkage to a combination of improved access to both surface water
          irrigation and improved groundwater levels due to Mohanpura reservoir.
          This increase is also indicative of improved water productivity.
        </p>
      </article>

      <article className="irrigationServices">
        <h2>Enhanced Access to Irrigation Services</h2>
        <p>
          As irrigation operators, the coverage of irrigated areas after
          commissioning of the sub-project was well understood and it was
          established that the sub-project had benefitted at least 12,000 ha and
          25,600 ha in the years 2019 and 2020 onwards respectively. A study
          using Copernicus Sentinel (10mx10m resolution) data was conducted for
          NDVI and irrigated area calculations. NDVI (change detection) study
          plates from year 2017 to 2021 are shown in figure below.
        </p>
        <figure>
          <img src={EnhanceExcess_1} alt="" />
        </figure>
        <p>
          The results of the calculations of irrigated area within the command
          boundaries of the sub-project are shown in figure as follows:
        </p>
        {/* <figure>
          <img src={gpsViewData_2} alt="" />
        </figure> */}
        <p>
          The calculations of irrigated area from the satellite imageries are
          shown in the graph.
        </p>
        <figure>
          <img src={areaEVI} alt="" />
        </figure>
      </article>
      <article className="energyConservation">
        <h2>Energy Conservation</h2>
        <p>
          Centralised pumping station is provided in the sub-project to deliver
          the water to the irrigated area of 25,600 Ha area. Considering the
          large size pumps to handle large flow rates and advanced automation
          and control system, the overall system efficiency is higher. The power
          calculation for the pumping station is shown in table below.
        </p>
        {/* <DataTable headers={tableData3.headers} data={tableData3.data} /> */}
        <p>
          If farmer was supposed to arrange water on her own then she would have
          used the water from well or borewell. Assuming any farmer is having
          landholding of 1 Ha and taking water from her own borewell of 100 mtr
          depth, the power calculation is done using 46% efficiency of
          agriculture pumps as shown in Table-4. This assumption is well above
          the average efficiency of 27.6% (Energy Management Centre -Kerala,
          2018).
        </p>
        <figure>
          <img src={energyConservation} alt="" />
        </figure>
        {/* <DataTable headers={tableData4.headers} data={tableData4.data} /> */}
        {/* <span>* Duty/flowrate considered same as per project</span>
        <span>
          ** Pump efficiencies taken as maximum efficiencies available in market
          but farmers predominantly use 10 to 12 years old pumps with efficiency
          less than 35%.
        </span> */}
        <p>
          The power and energy consumption for one irrigation season of 120 days
          and 8 Hrs operation of pumps is shown in Table-5.
        </p>
        {/* <DataTable headers={tableData5.headers} data={tableData5.data} /> */}
        <p>
          From the above calculations, it is clear that there is a saving of
          almost 9.38 million kW-hr energy per crop season due to centralised
          pumping approach.
        </p>
      </article>
      <article className="environmentalImpact_container">
        <h2>Environmental Impact and Reduction in Carbon Footprint</h2>
        <p>
          Due to centralised pumping system with high efficiency, there is net
          reduction of 9.38 million energy (kW-hr) as shown above compared to
          conventional pumping system by individual farmers. This reduction in
          energy consumption will result it into reduced greenhouse emission
          equivalent to carbon foot print of 2186 metric tonnes of carbon per
          irrigation season (1 kW-hr = 0.23314 kg CO2 reduction). In addition to
          providing required irrigation water in equitable manner to every
          farmer there is also substantial saving in electricity and thereby
          carbon footprint. There is a recurring saving in carbon footprint
          every season considering 30 years of project life; the total impact
          will be 65,580 metric tonnes. This would be equivalent to taking
          14,257 passenger vehicles off-road (A typical passenger vehicle emits
          about 4.6 metric tons of carbon dioxide per year). Thus, the approach
          of having centralised pumping station alleviates the environmental
          impact due to agriculture activities.
        </p>
      </article>
      <article className="localMigration_container">
        <h2>Mitigation of Local Distress Migration</h2>
        <p>
          Mohanpura right-bank command area was water scarce, drought-prone and
          lands are generally barren with little top-soil. Most of the locals
          had no option but to relocate to nearby Rajasthan towns of Kota, Tonk
          and Jaipur as labourers thereby denying a permanent home to their
          families and education for their children. Commissioning of the
          sub-project and assured availability of irrigation water in the lands
          of 168 villages has made the villagers to stay back and cultivate the
          second crop. The Sentinel data shows that about 12,000 ha got
          cultivated for the first time after the sub-project.
        </p>
      </article>
      <article style={{ margin: "5%", height: "80vh" }}>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/ZZnAAckMRI4?si=uLo2vN6SFo-UzM6G"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </article>
    </div>
  );
}
