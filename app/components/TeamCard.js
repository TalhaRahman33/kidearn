import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaLinkedinIn, FaYoutube } from 'react-icons/fa';

const TeamCard = () => {
  return (
    <div className="item">
      <div
        className="team-card-two wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="00ms"
        style={{ '--accent-color': '#F25334' }}
      >
        <div className="team-card-two__svg-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 198 150">
            <path d="M0.298312 1.27145C0.922648 0.466318 11.8598 0.0331889 28.3325 0.0553685C44.7796 0.138422 66.6942 0.881377 88.5464 3.35026C110.278 5.89193 131.109 11.0494 145.896 17.7296C149.469 19.4932 153.255 20.9185 156.192 22.7046C159.008 24.5634 161.67 26.2803 164.082 27.8674C165.288 28.6609 166.433 29.4274 167.51 30.1449C168.467 30.9352 169.277 31.7325 170.062 32.4638C171.631 33.9264 172.976 35.1981 174.028 36.2301C175.081 37.2621 176.365 38.5068 177.78 39.9543C179.152 41.4188 180.19 43.2943 181.597 45.227C182.919 47.1935 184.362 49.3408 185.9 51.603C187.481 53.8482 188.221 56.6029 189.52 59.2643C190.647 61.9933 191.937 64.7594 193.005 67.715C193.721 70.7842 194.463 73.9193 195.222 77.0983C197.041 83.3377 197.272 90.2038 197.752 96.8196C198.958 123.488 192.649 148.959 190.511 149.447C187.524 150.17 189.136 125.867 184.611 100.967C183.274 94.8164 182.357 88.348 179.947 82.6213C178.939 79.6926 177.941 76.786 176.968 73.9452C175.575 71.2958 174.207 68.7123 172.884 66.2387C171.474 63.7989 170.571 61.2607 168.888 59.259C167.291 57.2233 165.823 55.2637 164.433 53.5017C163 51.7567 161.963 50.008 160.609 48.7143C159.247 47.3986 158.014 46.2856 157.039 45.3246C156.065 44.3635 154.857 43.1897 153.46 41.7861C152.745 41.1038 152.046 40.3386 151.201 39.5803C150.236 38.8948 149.211 38.1823 148.16 37.4039C146.023 35.8859 143.723 34.2042 141.233 32.4194C138.7 30.6517 135.318 29.2446 132.192 27.4824C119.184 20.7855 100.619 15.0887 80.5937 11.5939C60.5252 8.11613 39.9122 6.14829 24.6887 4.64263C9.43961 3.19785 -0.31735 2.09854 0.298312 1.27145Z"></path>
          </svg>
        </div>
        <div
          className="team-card-two__image kidearn-tilt"
          data-tilt-options='{ "glare": false, "maxglare" : 0, "maxtilt" : 5, "speed" : 700, "scale" : 1 }'
        >
          <Image src="/images/team-2-1.jpg" alt="Jane cooper" width={200} height={200} />
        </div>
        <div className="team-card-two__content">
          <h3 className="team-card-two__title">
            <Link href="/team-details">
              <a>Jane cooper</a>
            </Link>
          </h3>
          <p className="team-card-two__designation">Swimming Teacher</p>
          <div className="list-unstyled team-card-two__social__list">
            <a className="fb" href="https://facebook.com" aria-label="Facebook">
              <span className="social-bg">
                <FaFacebookF />
              </span>
            </a>
            <a className="li" href="https://www.linkedin.com/" aria-label="Linkedin">
              <span className="social-bg">
                <FaLinkedinIn />
              </span>
            </a>
            <a className="yo" href="https://www.youtube.com" aria-label="Youtube">
              <span className="social-bg">
                <FaYoutube />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
