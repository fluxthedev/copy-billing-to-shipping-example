fullState = function(input){
    
    var states = [
        ['Arizona', 'AZ'],
        ['Alabama', 'AL'],
        ['Alaska', 'AK'],
        ['Arizona', 'AZ'],
        ['Arkansas', 'AR'],
        ['California', 'CA'],
        ['Colorado', 'CO'],
        ['Connecticut', 'CT'],
        ['Delaware', 'DE'],
        ['Florida', 'FL'],
        ['Georgia', 'GA'],
        ['Hawaii', 'HI'],
        ['Idaho', 'ID'],
        ['Illinois', 'IL'],
        ['Indiana', 'IN'],
        ['Iowa', 'IA'],
        ['Kansas', 'KS'],
        ['Kentucky', 'KY'],
        ['Kentucky', 'KY'],
        ['Louisiana', 'LA'],
        ['Maine', 'ME'],
        ['Maryland', 'MD'],
        ['Massachusetts', 'MA'],
        ['Michigan', 'MI'],
        ['Minnesota', 'MN'],
        ['Mississippi', 'MS'],
        ['Missouri', 'MO'],
        ['Montana', 'MT'],
        ['Nebraska', 'NE'],
        ['Nevada', 'NV'],
        ['New Hampshire', 'NH'],
        ['New Jersey', 'NJ'],
        ['New Mexico', 'NM'],
        ['New York', 'NY'],
        ['North Carolina', 'NC'],
        ['North Dakota', 'ND'],
        ['Ohio', 'OH'],
        ['Oklahoma', 'OK'],
        ['Oregon', 'OR'],
        ['Pennsylvania', 'PA'],
        ['Rhode Island', 'RI'],
        ['South Carolina', 'SC'],
        ['South Dakota', 'SD'],
        ['Tennessee', 'TN'],
        ['Texas', 'TX'],
        ['Utah', 'UT'],
        ['Vermont', 'VT'],
        ['Virginia', 'VA'],
        ['Washington', 'WA'],
        ['West Virginia', 'WV'],
        ['Wisconsin', 'WI'],
        ['Wyoming', 'WY'],
    ];

    input = input.toUpperCase();
    for(i = 0; i < states.length; i++){
        if(states[i][1] == input){
            return(states[i][0]);
        }
    }     
}

$('input:checkbox').change(
    function(){
        // Get the checkbox
        var checkBox = $("#copy-to-shipping");
        
        //Creating varibles for element selectors used more than once
        var billingCompany = $("#billing_company").val();
        var billingState = $("#billing_state").val();
        var shippingStatePlaceholder = $('.select2-selection__placeholder');
    
        // If the checkbox is checked, display the output text
        if (checkBox.prop("checked") == true){

            $("#shipping_first_name").val($("#billing_first_name").val());

            $("#shipping_last_name").val($("#billing_last_name").val());

            //Checks to see if optional field is filled out then copies, else skips
            if (billingCompany !== '') {
            $("#shipping_company").val(billingCompany);
            }

            $("#shipping_address_1").val($("#billing_address_1").val());

            $("#shipping_address_2").val($("#billing_address_2").val());
            
            $("#shipping_city").val($("#billing_city").val());

            $("#shipping_state").val(billingState);
            
            /*
                Placeholder has full state name and dropdown value has abbr state name.
                Therefore converted it to full name and applied css to match billing
            */
            var fullStateConverted = fullState(billingState);
            shippingStatePlaceholder.text(fullStateConverted);
            shippingStatePlaceholder.css('color', '#444');

            $("#shipping_postcode").val($("#billing_postcode").val());
        }
    }
);