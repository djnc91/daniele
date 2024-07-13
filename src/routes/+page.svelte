<script>
  import './styles.css'

  import IcTwotonePerson3 from '~icons/ic/twotone-person-3';
  import IcTwotoneBook from '~icons/ic/twotone-book';
  import IcTwotoneInsertChart from '~icons/ic/twotone-insert-chart';
  import IcTwotoneAreaChart from '~icons/ic/twotone-area-chart';
  import IcTwotonePieChart from '~icons/ic/twotone-pie-chart';
  import IcTwotonePermContactCalendar from '~icons/ic/twotone-perm-contact-calendar';
  import IcTwotoneSchool from '~icons/ic/twotone-school';

  import IcTwotoneDashboardCustomize from '~icons/ic/twotone-dashboard-customize';
  import IcTwotoneAnalytics from '~icons/ic/twotone-analytics';
  import IcTwotoneSell from '~icons/ic/twotone-sell';
  import IcTwotoneAddAlarm from '~icons/ic/twotone-add-alarm';
  import IcTwotoneScheduleSend from '~icons/ic/twotone-schedule-send';
  import IcTwotoneAccountTree from '~icons/ic/twotone-account-tree';
  import IcTwotoneMonitorHeart from '~icons/ic/twotone-monitor-heart';
  import IcTwotoneDataset from '~icons/ic/twotone-dataset';
  import IcTwotonePhoneAndroid from '~icons/ic/twotone-phone-android';
  import IcTwotoneAddIcCall from '~icons/ic/twotone-add-ic-call';
  import IcTwotoneManageAccounts from '~icons/ic/twotone-manage-accounts';
  import IcTwotoneWindow from '~icons/ic/twotone-window';

  import IcTwotoneAddLocation from '~icons/ic/twotone-add-location';
  import IcTwotonePersonPin from '~icons/ic/twotone-person-pin';

import IcTwotoneLibraryMusic from '~icons/ic/twotone-library-music';
import IcTwotoneMovie from '~icons/ic/twotone-movie';
import IcTwotoneAirplaneTicket from '~icons/ic/twotone-airplane-ticket';
import IcTwotoneSportsHandball from '~icons/ic/twotone-sports-handball';

  import Accordion from './Accordion.svelte';

  import profilePicture from "$lib/assets/me.jpg";
</script>

<div class="content-wrapper">
  <nav>
    <a href="#about"><IcTwotonePerson3 /><span class="tooltip">Profile</span></a>
    <a href="#education"><IcTwotoneBook /><span class="tooltip">Education</span></a>
    <a href="#expertise"><IcTwotoneInsertChart /><span class="tooltip">Expertise</span></a>
    <a href="#skills"><IcTwotonePieChart /><span class="tooltip">Skills</span></a>
    <a href="#experience"><IcTwotoneAreaChart /><span class="tooltip">Experience</span></a>
    <a href="#references"><IcTwotonePermContactCalendar /><span class="tooltip">References</span></a>
  </nav>
  
  <div class="about-wrapper">
    <div class="picture-wrapper">
      <img src={profilePicture} alt="A picture of me">
      <div class="gradient-edges"></div>
    </div>
    <div class="name-title">
      <h2>DANIËLE<br>
      <span class="middle-names">JODY NAKITA CHARLIE</span><br>
      HAARHOFF
      </h2>
      <h3>Hobbies & Interests</h3>
      <div class="hobbies-wrapper">
        <p><IcTwotoneLibraryMusic /> Music</p>
        <p><IcTwotoneMovie /> Movies</p>
        <p><IcTwotoneAirplaneTicket /> Travel</p>
        <p><IcTwotoneSportsHandball /> Climbing</p>
      </div>
    </div>
  </div>

  <div class="about-content">
    <h1 id="about"><span class="h1-icon"><IcTwotonePerson3 /></span> Profile</h1>
    <h2>Experienced Sales Representative with a Decade of Industry Expertise</h2>
    <p>
      With over 10 years of experience in sales, I am proficient in quickly
      mastering new inventory and services. I am committed to fostering
      strong customer relationships through proactive outreach and
      maintaining positive interactions with existing clients. My skills in
      negotiating packages and pricing have consistently led to
      successful sales closures.<br><br>
      As a motivated and adaptable self-starter, I thrive both
      independently and as part of a team. Known for my strong work
      ethic, I excel under pressure and consistently deliver outstanding
      results. Always ready to assist, I am a dedicated team player and a
      people person at heart.
    </p>
    <h1 id="education"><span class="h1-icon"><IcTwotoneBook /></span> Education</h1>
    <div class="education-wrapper">
      <div class="education-tile">
        <h3>Matric - National Senior Certificate</h3>
        <h3><IcTwotoneSchool /></h3>
      </div>
      <div class="education-tile">
        <h3>Impaq Home Schooling 2019</h3>
        <h3><IcTwotoneSchool /></h3>
      </div>
    </div>
  <h1 id="expertise"><span class="h1-icon"><IcTwotoneInsertChart /></span> Areas of Expertise</h1>
  <div class="certs-wrapper">
    <div class="cert-tile"><IcTwotoneDashboardCustomize /><br> Customer Care</div>
    <div class="cert-tile"><IcTwotoneAnalytics /><br> Analysis</div>
    <div class="cert-tile"><IcTwotoneSell /><br>Closing Sales</div>
    <div class="cert-tile"><IcTwotoneAddAlarm /><br>Identifying sales opportunities</div>
    <div class="cert-tile"><IcTwotoneScheduleSend /><br>Work scheduling</div>
    <div class="cert-tile"><IcTwotoneAccountTree /><br>Account management</div>
    <div class="cert-tile"><IcTwotoneMonitorHeart /><br>Client Relations</div>
    <div class="cert-tile"><IcTwotoneDataset /><br>Data Capturing</div>
    <div class="cert-tile"><IcTwotonePhoneAndroid /><br>Telesales</div>
    <div class="cert-tile"><IcTwotoneAddIcCall /><br>Cold Calling</div>
    <div class="cert-tile"><IcTwotoneManageAccounts /><br>Various systems such as Pastel and
    Syspro, Syspro 6.1, POS</div>
    <div class="cert-tile"><IcTwotoneWindow /><br>Office Suite; Excel, Outlook,
    Powerpoint, Word</div>
  </div>
  <h1 id="skills"><span class="h1-icon"><IcTwotonePieChart /></span> Personal Skills</h1>
  <div class="skills-wrapper">
    <div class="skill-tile">
      <ul>
      <li>Task prioitization</li>
      <li>Time management</li>
      <li>Negotiation skills</li>
    </ul>
    </div>
    <div class="skill-tile">
      <ul>
        <li>Presentable & articulate</li>
        <li>Building relationships</li>
        <li>Highly motivated</li>
      </ul>
    </div>
    <div class="skill-tile">
      <ul>
        <li>Goal oriented</li>
        <li>Target driven</li>
        <li>Listening skills</li>
      </ul>
    </div>
    <div class="skill-tile">
      <ul>
        <li>Flexibility & adaptibility</li>
        <li>Problem solving skills</li>
        <li>Strong work ethic</li>
      </ul>
    </div>
    <div class="skill-tile">
      <ul>
        <li>Honesty & Integrity</li>
        <li>Forecasting</li>
        <li>Strategy Development</li>
      </ul>
    </div>
    <div class="skill-tile">
      <ul>
        <li>Business Development</li>
        <li>Account Management</li>
        <li>International Sales</li>
      </ul>
  </div>
</div>
<h1 id="experience"><span class="h1-icon"><IcTwotoneAreaChart /></span> Work Experience</h1>
  <Accordion>
    <span slot="head">Farosian (Pty) Ltd.</span>
    <div slot="details">
      <div class="experience-title">
        <p>2020 – current</p>
        <p><strong>Head of Sales</strong></p>
      </div>
      <ul>
        <li>Catalyst for acquiring pivotal clients and forging strategic partnerships.</li>
        <li>Cultivating and maintaining strong business relationships.</li>
        <li>Business development activities in multiple geographical territories.</li>
        <li>Liaise and contribute with marketing strategies.</li>
        <li>Member of the EXCO team.</li>
        <li>Day to day sales construction and execution.</li>
        <li>Demonstrated expertise in engaging and negotiating with senior executives to secure and close significant sales deals.</li>
        <li>Contributed to venture capital funding round relating to strategic sales direction</li>
      </ul>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">Formax (Pty) Ltd.</span>
    <div slot="details">
      <div class="experience-title">
        <p>2019 - 2020</p>
        <p><strong>Business Development Executive</strong></p>
      </div>
      <ul>
        <li>Processing of quotes for existing and potential clients.</li>
        <li>Day to day sales.</li>
        <li>Processing of tenders for government orders.</li>
        <li>Cold calling potential new clients and securing appointments.</li>
        <li>Contacting suppliers and sourcing of items to suit the clients needs.</li>
        <li>Following up with stock on backorder, ensuring the clients receive their goods timeously.</li>
        <li>Maintaining of a good relationship with clients to ensure the best service provided.</li>
        <li>Custom form quotes and setting of a custom form.</li>
        <li>Meeting with existing clients on a monthly basis.</li>
        <li>Meeting of personal as well as team targets.</li>
      </ul>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">Shimanksy</span>
    <div slot="details">
      <div class="experience-title">
        <p>2016</p>
        <p><strong>Sales Ambassador</strong></p>
      </div>
      <ul>
        <li>As an employee at a luxurious retail store you are expected to dress, behave and speak impeccably, as well as have expert product knowledge and follow strict guidelines on how to present, communicate and sell to a client.</li>
        <li>Assisting return/ new clientele, national and international.</li>
        <li>Complete sales transactions with customers.</li>
        <li>Capturing of invoices, credit notes, orders, jobs, inter branch transfers, petty cash.</li>
        <li>Liasing with head office and various branches.</li>
        <li>Negotiating with potential and existing clients.</li>
        <li>Handling client complaints and queries.</li>
        <li>Liasing with tour guides as well as security companies to organize high profile client tours/ purchases.</li>
        <li>Laying out of jewellery in their designated display cabinets.</li>
        <li>Ensure opening and closing of the store daily.</li>
        <li>Maintaining store cleanliness and admin organization.</li>
        <li>Stock take.</li>
        <li>Receiving specifications as well as creating job slips for the manufacturing/repairing of jewellery items.</li>
        <li>Perfect handling of highly valuable items.</li>
      </ul>
    </div>
  </Accordion>
  <Accordion>
    <span slot="head">Elite Labels</span>
    <div slot="details">
      <div class="experience-title">
        <p>2013 - 2016</p>
        <p><strong>Sales Support & Assistant to the Business Development Manager</strong></p>
      </div>
      <ul>
        <li>Processing of quotes for existing and potential clients</li>
        <li>Processing of tenders for government orders</li>
        <li>Cold calling potential new clients and securing</li>
        <li>appointments for relative external sales reps</li>
        <li>Contacting suppliers and sourcing of items to suit the</li>
        <li>client's needs</li>
        <li>Following up with stock on backorder, ensuring the clients</li>
        <li>receive their goods timeously</li>
        <li>Maintaining of a good relationship with clients to ensure</li>
        <li>the best service is provided</li>
        <li>Custom form quotes and setting of a custom form</li>
        <li>Processing of specification sheets as well as purchase</li>
        <li>orders to the printing factories for custom orders</li>
        <li>Maintenance of nation-wide client accounts including</li>
        <li>very demanding clients</li>
      </ul>
    </div>
  </Accordion>
  <h1 id="references"><span class="h1-icon"><IcTwotonePermContactCalendar /></span> References</h1>
  <div class="references-wrapper">
    <div class="references-tile">
      <p>
      <IcTwotoneAddLocation /> <strong> Shimansky</strong><br>
      <IcTwotonePersonPin /> Martin van der Westhuysen <br> 
      <IcTwotonePhoneAndroid /> 084 973 1883
    </p> 
    </div>
    <div class="references-tile">
      <p>
      <IcTwotoneAddLocation /> <strong> Elite Labels</strong><br>
      <IcTwotonePersonPin /> Rakesh<br>
      <IcTwotonePhoneAndroid /> 012 666 7999
    </p>
    </div>
    <div class="references-tile">
      <p>
      <IcTwotoneAddLocation /> <strong> Formax</strong><br>
      <IcTwotonePersonPin /> Elmari Ashford-Britz<br>
      <IcTwotonePhoneAndroid /> 084 973 1883
    </p>
    </div>
    <div class="references-tile">
      <p>
      <IcTwotoneAddLocation /> <strong> Farosian</strong><br>
      <IcTwotonePersonPin /> Farhad Bhyat<br>
      <IcTwotonePhoneAndroid /> 083 415 4756
      </p>
    </div>
  </div>
</div>
</div>
<div class="background-gradient">
  <div class="background-gradient-cover"></div>
</div>