function showHide(){$(document).on("click",".sh-btn",function(e){e.preventDefault();$(this).closest(".sh-block").toggleClass("sh-hidden")})}function moreNews(){$(document).on("click",".show-more-news",function(e){e.preventDefault();var n=$(".new-blocks");$.ajax({url:"../src/blocks/newsblock/example.html",cache:!1,type:"POST",data:{offset:offset},success:function(e){$(n).append(e)}}),checkMoreNewsButton()})}function checkMoreNewsButton(){var e=$(".news-item"),n=e.length;e.length<=n&&(e.length=n,$(".show-more-news").hide())}$(document).ready(function(){showHide(),moreNews(),checkMoreNewsButton()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsic2hvd0hpZGUiLCIkIiwiZG9jdW1lbnQiLCJvbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInRoaXMiLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJtb3JlTmV3cyIsImNvbnRhaW5lciIsImFqYXgiLCJ1cmwiLCJjYWNoZSIsInR5cGUiLCJkYXRhIiwib2Zmc2V0Iiwic3VjY2VzcyIsImh0bWwiLCJhcHBlbmQiLCJjaGVja01vcmVOZXdzQnV0dG9uIiwibmV3cyIsImxlbmd0aCIsImhpZGUiLCJyZWFkeSJdLCJtYXBwaW5ncyI6IkFBTUEsU0FBU0EsV0FDTEMsRUFBRUMsVUFBVUMsR0FBRyxRQUFTLFVBQVcsU0FBU0MsR0FDeENBLEVBQUVDLGlCQUVVSixFQUFFSyxNQUFNQyxRQUFRLGFBQ3RCQyxZQUFZLGVBSTFCLFNBQVNDLFdBQ1JSLEVBQUVDLFVBQVVDLEdBQUcsUUFBUyxrQkFBbUIsU0FBU0MsR0FDbkRBLEVBQUVDLGlCQUVGLElBQUlLLEVBQVlULEVBQUUsZUFFbEJBLEVBQUVVLE1BQ0RDLElBQUssdUNBQ0xDLE9BQU8sRUFDUEMsS0FBTSxPQUNOQyxNQUFPQyxPQUFPQSxRQUNkQyxRQUFTLFNBQVNDLEdBQ2pCakIsRUFBRVMsR0FBV1MsT0FBT0QsTUFHdEJFLHdCQUlGLFNBQVNBLHNCQUNSLElBQUlDLEVBQU9wQixFQUFFLGNBQ1RlLEVBQVNLLEVBQUtDLE9BRWZELEVBQUtDLFFBQVVOLElBQ2pCSyxFQUFLQyxPQUFTTixFQUNkZixFQUFFLG1CQUFtQnNCLFFBeEN2QnRCLEVBQUVDLFVBQVVzQixNQUFNLFdBQ2pCeEIsV0FDQVMsV0FDQVciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdHNob3dIaWRlKCk7XHJcblx0bW9yZU5ld3MoKTtcclxuXHRjaGVja01vcmVOZXdzQnV0dG9uKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gc2hvd0hpZGUoKSB7XHJcbiAgICAkKGRvY3VtZW50KS5vbignY2xpY2snLCAnLnNoLWJ0bicsIGZ1bmN0aW9uKGUpe1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgdmFyIGJsb2NrID0gJCh0aGlzKS5jbG9zZXN0KCcuc2gtYmxvY2snKTtcclxuICAgICAgICBibG9jay50b2dnbGVDbGFzcygnc2gtaGlkZGVuJyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbW9yZU5ld3MoKSB7XHJcblx0JChkb2N1bWVudCkub24oJ2NsaWNrJywgJy5zaG93LW1vcmUtbmV3cycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcblx0XHR2YXIgY29udGFpbmVyID0gJCgnLm5ldy1ibG9ja3MnKTtcclxuXHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmw6ICcuLi9zcmMvYmxvY2tzL25ld3NibG9jay9leGFtcGxlLmh0bWwnLFxyXG5cdFx0XHRjYWNoZTogZmFsc2UsXHJcblx0XHRcdHR5cGU6ICdQT1NUJyxcclxuXHRcdFx0ZGF0YToge29mZnNldDpvZmZzZXR9LFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihodG1sKXtcclxuXHRcdFx0XHQkKGNvbnRhaW5lcikuYXBwZW5kKGh0bWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdGNoZWNrTW9yZU5ld3NCdXR0b24oKTtcdFx0XHJcblx0fSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNoZWNrTW9yZU5ld3NCdXR0b24oKSB7XHJcblx0dmFyIG5ld3MgPSAkKFwiLm5ld3MtaXRlbVwiKTtcclxuXHR2YXIgb2Zmc2V0ID0gbmV3cy5sZW5ndGg7XHJcblxyXG5cdGlmKG5ld3MubGVuZ3RoIDw9IG9mZnNldCl7XHJcblx0XHRuZXdzLmxlbmd0aCA9IG9mZnNldDtcclxuXHRcdCQoJy5zaG93LW1vcmUtbmV3cycpLmhpZGUoKTtcclxuXHR9XHJcbn0iXX0=
