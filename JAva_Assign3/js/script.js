  // Method for using $.getJSON
  function fetchTeamDataWithGetJSON() {
    $.getJSON('team.json', function (data) {
        $.each(data, function (index, member) {
            const memberDiv = $('<div class="team-member"></div>');
            const memberName = $('<h2>' + member.name + '</h2>');
            const memberPosition = $('<h5>' + member.position + '</h5>');
            const memberBio = $('<p>' + member.bio + '</p>');

            memberDiv.append(memberName, memberPosition, memberBio);
            $('#team').append(memberDiv);
        });
    }).fail(function () {
        $('#team').html('Error: Unable to retrieve data');
    });
}

// Method for using $.ajax
function fetchTeamDataWithAjax() {
    $('#team').html('Loading...');

    $.ajax({
        url: 'team.json',
        type: 'GET',
        dataType: 'json',
        beforeSend: function () {
            $('#team').html('Loading...');
        },
        success: function (data) {
            setTimeout(function () {
                $('#team').empty();

                $.each(data, function (index, member) {
                    const memberDiv = $('<div class="team-member"></div>');
                    const memberName = $('<h2>' + member.name + '</h2>');
                    const memberPosition = $('<h5>' + member.position + '</h5>');
                    const memberBio = $('<p>' + member.bio + '</p>');

                    memberDiv.append(memberName, memberPosition, memberBio);
                    $('#team').append(memberDiv);
                });
            }, 3000); // Delay for 3 seconds (Bonus)
        },
        error: function () {
            $('#team').html('Error: Unable to retrieve data');
        }
    });
}

$(document).ready(function () {
    // Choose which method to use (either fetchTeamDataWithGetJSON or fetchTeamDataWithAjax)
    // Uncomment the method you want to test.

    // Method 1: Using $.getJSON
    // fetchTeamDataWithGetJSON();

    // Method 2: Using $.ajax
    fetchTeamDataWithAjax();
});