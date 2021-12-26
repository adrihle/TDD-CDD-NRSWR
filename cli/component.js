const fs = require('fs');

const capitalizeFirst = (str) => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;

const name = process.argv[2] || 'generic';
const handler = process.argv[3] || false;
const niceName = capitalizeFirst(name);

console.log(`🦉 Creating ${niceName} Component ...`);

const createFolder = async (folderName) => {
    return new Promise((resolve, reject) => {
        fs.mkdir(folderName, (err) => {
            if(err) reject(err);
            else resolve();
        });
    })
}


createFolder(name).then(async () => {
    // CREATE COMPONENT
   fs.writeFile(`${name}/${name}.component.tsx`, 
`import { styles } from './_modules';

export const ${niceName}Component: React.FC = () => 
    <div className={styles.wrapper}>${name} work fine</div>
`, error => {
        if(error) console.log(error);
        else console.log(`🔵 Component created successfully`)
    });

    // CREATE TEST
    fs.writeFile(`${name}/${name}.test.tsx`, 
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
`, error => {
        if(error) console.log(error);
        else console.log(`🟢 Test created successfully`)
    });

    //CREATE _MODULES
    createFolder(`${name}/_modules`).then(async () => {

        // CREATE STYLES
        fs.writeFile(`${name}/_modules/${name}.module.scss`, 
`.wrapper{
    font-size: 20px;
}
        `, error => {
                if(error) console.log(error);
                else console.log(`🔴 Styles created successfully`)
        });

        if (handler){
            fs.writeFile(`${name}/_modules/${handler}.handler.ts`, 
`export const ${handler}Handler = (): void => console.log('handler working');
        `, error => {
                if(error) console.log(error);
                else console.log(`🟠 Handler created successfully`)
        });
        }

        // CREATE MODULES INDEX
        fs.writeFile(`${name}/_modules/index.ts`, 
`import styles from './${name}.module.scss';
export { styles };
${handler && `export * from './${handler}.handler';

`}
    `, error => {
        if(error) console.log(error);
        else console.log(`🤌  Indexed modules successfully`)
        });
    })

    // CREATE INDEX
    fs.writeFile(`${name}/index.ts`, 
`export { ${niceName}Component } from './${name}.component';
`, error => {
        if(error) console.log(error);
        else console.log(`🤌  Indexed successfully`)
    });


    if (handler === 'H'){
        // CREATE INDEX
        fs.writeFile(`${name}/${name}.handler.ts`, 
`export { ${niceName}Component } from './${name}.component';
`, error => {
            if(error) console.log(error);
            else console.log(`🤌  Indexed successfully`)
        });

    }
})