import React from 'react';
import DataTable from 'react-data-table-component';
import DataTableExtensions from "react-data-table-component-extensions";

const DataGrid = ({ csv }) => {
    if(!csv) {
        return null;
    }
        
    return (
        <div className="main">
            <DataTableExtensions
                columns={csv.header}
                data={csv.data}
                print={false}
                export={false}
                filterPlaceholder="Pesquise por Interprete, Código, Nome da música ou Trecho"
            > 
                <DataTable
                    noHeader
                    striped
                    highlightOnHover
                    responsive
                    pagination
                    paginationPerPage={20}
                />
            </DataTableExtensions>
        </div>
    )
}

export default DataGrid;