from http import HTTPStatus
from http import HTTPMethod

class HTTPStatus:
    HTTPStatus.OK
    HTTPStatus.OK == 200
    HTTPStatus.OK.value
    HTTPStatus.OK.phrase
    HTTPStatus.OK.description
    HTTPStatus.OK.is_success
    HTTPStatus.OK.is_client_error
    list(HTTPStatus)

class HTTPMethod:
    HTTPMethod.GET
    HTTPMethod.GET == 'GET'
    HTTPMethod.GET.value
    HTTPMethod.GET.description
    list(HTTPMethod)