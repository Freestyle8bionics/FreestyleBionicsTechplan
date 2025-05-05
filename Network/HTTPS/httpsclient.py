import socket
import ssl

hostname = 'freestylebionicsofficial.com'
context = ssl.create_default_context()

with socket.create_connection((hostname, 443)) as sock:
    with context.wrap_socket(sock, server_hostname=hostname) as ssock:
        print(ssock.version())
# class http.client.HTTPSConnection(host, port=None, *, [timeout,], source_address=None, context=None, blocksize=8192):
#     h1 = http.client.HTTPConnection('www.python.org')
#     h2 = http.client.HTTPConnection('www.python.org:443')
#     h3 = http.client.HTTPConnection('www.python.org', 443)
#     h4 = http.client.HTTPConnection('www.python.org', 443, timeout=10)