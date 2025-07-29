import "./Footer.scss";

const linksFooter = [
  {
    type: "link",
    title: "GitHub",
    url: "https://github.com/anna-poplavska",
  },
  {
    type: "link",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/anna-poplavska/",
  },
  {
    type: "mail",
    title: "annapoplavska10@gmail.com",
    url: "mailto:annapoplavska10@gmail.com",
  },
];

export const Footer = () => {
  return (
    <footer id="contact" className="footer">
      <p className="footer__license">© 2025 Anna Poplavska</p>

      <ul className="footer__nav">
        {linksFooter.map((linkFooter) => {
          return (
            <li className="footer__nav--item" key={linkFooter.title}>
              <a
                target="_blank"
                href={linkFooter.url}
                className={
                  linkFooter.type === "mail"
                    ? "footer__nav--mail"
                    : "footer__nav--link"
                }
              >
                {linkFooter.title}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
