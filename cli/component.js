const fs = require('fs');

const capitalizeFirst = (str) =>
  `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const name = process.argv[2] || 'generic';
const handler = process.argv[3] || false;
const niceName = capitalizeFirst(name);

console.log(`🦉 Creating ${niceName} Component ...`);

const createFolder = async (folderName) => {
  return new Promise((resolve, reject) => {
    fs.mkdir(`${process.env.INIT_CWD}/${folderName}`, (err) => {
      if (err) reject(err);
      else resolve();
    });
  });
};

createFolder(name).then(async () => {
  // CREATE COMPONENT
  fs.writeFile(
    `${process.env.INIT_CWD}/${name}/${name}.component.tsx`,
    `import styles from './${name}.module.scss';

export const ${niceName}Component: React.FC = () => 
    <div className={styles.wrapper}>${name} work fine</div>
`,
    (error) => {
      if (error) console.log(error);
      else console.log(`🔵 Component created successfully`);
    }
  );

  // CREATE TEST
  fs.writeFile(
    `${process.env.INIT_CWD}/${name}/${name}.test.tsx`,
    `/**
* @jest-environment jsdom
*/
import { screen, render } from '@testing-library/react';
import { ${niceName}Component } from './${name}.component'
beforeEach(() => render(<${niceName}Component />));

describe('${name} component', () => {
    it('Must display on screen', () => {
        expect(screen.queryByText(/${name} work fine/i)).toBeInTheDocument();
    });
});
`,
    (error) => {
      if (error) console.log(error);
      else console.log(`🟢 Test created successfully`);
    }
  );

  // CREATE STYLES
  fs.writeFile(
    `${process.env.INIT_CWD}/${name}/${name}.module.scss`,
    `.wrapper{
  font-size: 20px;
}
      `,
    (error) => {
      if (error) console.log(error);
      else console.log(`🔴 Styles created successfully`);
    }
  );

  if (handler) {
    //CREATE _MODULES
    createFolder(`${process.env.INIT_CWD}/${name}/_modules`).then(async () => {
      //CREATE HANDLER
      fs.writeFile(
        `${process.env.INIT_CWD}/${name}/_modules/${handler}.handler.ts`,
        `export const ${handler}Handler = (): void => console.log('handler working');
      `,
        (error) => {
          if (error) console.log(error);
          else console.log(`🟠 Handler created successfully`);
        }
      );

      // CREATE MODULES INDEX
      fs.writeFile(
        `${process.env.INIT_CWD}/${name}/_modules/index.ts`,
        `${
          handler &&
          `export * from './${handler}.handler';
`
        }
    `,
        (error) => {
          if (error) console.log(error);
          else console.log(`🤌  Indexed modules successfully`);
        }
      );
    });
  }

  // CREATE INDEX
  fs.writeFile(
    `${process.env.INIT_CWD}/${name}/index.ts`,
    `export { ${niceName}Component } from './${name}.component';
`,
    (error) => {
      if (error) console.log(error);
      else console.log(`🤌  Indexed successfully`);
    }
  );

  if (handler === 'H') {
    // CREATE INDEX
    fs.writeFile(
      `${process.env.INIT_CWD}/${name}/${name}.handler.ts`,
      `export { ${niceName}Component } from './${name}.component';
`,
      (error) => {
        if (error) console.log(error);
        else console.log(`🤌  Indexed successfully`);
      }
    );
  }
});
