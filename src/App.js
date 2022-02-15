import React, {
  useEffect,
  useState
} from 'react';
import DataGrid from './DataGrid';

const parseCsv = (text) => {
  const result = {
    header: [],
    data: []
  }
  const [header, ...content] = text.split('\n');
  const columns = [
    {
      id: 'codigo',
      name: 'Código',
      selector: row => row.codigo,
      filterable: true,
      width: "80px"    
    },
    {
      id: 'interprete',
      name: 'Interprete',
      selector: row => row.interprete,
      filterable: true,
    },
    {
      id: 'nome',
      name: 'Nome',
      selector: row => row.nome,
      filterable: true,
    },
    {
      id: 'trecho',
      name: 'Trecho',
      selector: row => row.trecho,
      filterable: true,
    },
    {
      id: 'idioma',
      name: 'Idioma',
      selector: row => row.idioma,
      filterable: true,
    },
  ];

  content.forEach(item => {
    let itemSplited = item.split(';');
    let itemObj = {
      codigo: itemSplited[1] ? itemSplited[1].replace(/"/g,"") : '',
      interprete: itemSplited[0] ? itemSplited[0].replace(/"/g,"") : '',
      nome: itemSplited[2] ? itemSplited[2].replace(/"/g,"") : '',
      trecho: itemSplited[3] ? itemSplited[3].replace(/"/g,"") : '',
      idioma: itemSplited[4] ? itemSplited[4].replace(/"/g,"") : ''
    }
    if(!itemObj.interprete || !itemObj.codigo) {
      return;
    }
    result.data.push(itemObj)
  });
  result.header = columns;
  console.log(result)
  return result
}

export default function App() {
  const [csv, setCsv] = useState(null);

  useEffect(() => {
    fetch('arquivo.csv')
      .then((r) => r.text())
      .then((text) => {
        setCsv(parseCsv(text))
      });
  }, []);

  return( 
    <div className = "App" >
      <DataGrid csv = { csv } > 
      </DataGrid> 
    </div > 
  )
}