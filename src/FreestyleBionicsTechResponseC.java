import java.io.IOException;
import java.io.InputStream;
import java.net.CacheResponse;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.TreeMap;

public class FreestyleBionicsTechResponseC {

    public static void main(String[] args)
        throws IOException
    {
        CacheResponse cr = new CacheResponse() {
            public Map<String, List<String>> getHeaders() throws IOException {
                
                Map<Integer, List<String>> map = new TreeMap<Integer, List<String>>();

                List<String> list = new LinkedList<String>();

                list.add("FBT");

                map.put(1, list);

                System.out.println(map);
                return null;
            }
            public InputStream getBody() throws IOException{
                return null;
            }
        };

        cr.getHeaders();
    }
}

