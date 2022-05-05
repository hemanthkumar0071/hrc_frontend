export default async function DataAdding(inputs) {
    return await fetch('http://localhost:8080/Invoice/Add', {
      method: 'POST',
      body: new URLSearchParams({
        sl_no: inputs.sl_no,
        buisness_code: inputs.buisness_code,
        clear_date: inputs.clear_Date,
        business_year: inputs.business_Year,
        doc_id: inputs.doc_id,
        posting_date: inputs.posting_date,
        document_create_date: inputs.document_create_date,
        due_date: inputs.due_date,
        invoice_currency: inputs.invoice_currency,
        document_type: inputs.document_type,
        posting_id: inputs.posting_id,
        total_open_amount: inputs.total_open_amount,
       // aging_bucket: inputs.aging_bucket,
        baseline_create_date: inputs.baseline_create_date,
        cust_Payment_Terms: inputs.Cust_Payment_Terms,
        invoice_Id: inputs.Invoice_Id,

        
      })
    });
  }