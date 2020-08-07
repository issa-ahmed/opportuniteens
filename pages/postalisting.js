$(document).ready(function() {
    $('#formSelectCat').on('change', function() {
        if (this.value === '0')
        {
            $("#jobsS").hide();
            $("#volunteeringS").hide();
            $("#internshipsS").hide();
            $("#extracurricularsS").hide();
            $("#guidanceS").hide();
        }
        else if (this.value === '1')
        {
            $("#jobsS").show();
            $("#volunteeringS").hide();
            $("#internshipsS").hide();
            $("#extracurricularsS").hide();
            $("#guidanceS").hide();
        }
        else if (this.value === '2')
        {
            $("#jobsS").hide();
            $("#volunteeringS").show();
            $("#internshipsS").hide();
            $("#extracurricularsS").hide();
            $("#guidanceS").hide();
        }
        else if (this.value === '3')
        {
            $("#jobsS").hide();
            $("#volunteeringS").hide();
            $("#internshipsS").show();
            $("#extracurricularsS").hide();
            $("#guidanceS").hide();
        }
        else if (this.value === '4')
        {
            $("#jobsS").hide();
            $("#volunteeringS").hide();
            $("#internshipsS").hide();
            $("#extracurricularsS").show();
            $("#guidanceS").hide();
        }
        else if (this.value === '5')
        {
            $("#jobsS").hide();
            $("#volunteeringS").hide();
            $("#internshipsS").hide();
            $("#extracurricularsS").hide();
            $("#guidanceS").show();
        }
        else {
            $("#jobsS").hide();
            $("#volunteeringS").hide();
            $("#internshipsS").hide();
            $("#extracurricularsS").hide();
            $("#guidanceS").hide();
        }
    });
});

$(document).ready(function(){
    $('#formSelectPriceI').on('change', function() {
        if ( this.value == '1')
        {
            $("#payperhour").show();
        }
        else
        {
            $("#payperhour").hide();
        }
    });
});

function formatPhone(obj) {
    var numbers = obj.value.replace(/\D/g, ''),
        char = {0:'(',3:')-',6:'-'};
    obj.value = '';
    for (var i = 0; i < numbers.length; i++) {
        obj.value += (char[i]||'') + numbers[i];
    }
}


