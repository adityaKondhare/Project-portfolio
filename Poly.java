class Poly {
    public  void name(){
        System.out.println("aditya");
    }
    public void s_name(){
        System.out.println("kondhare");
    }
}

class InnerPoly extends Poly {
    public  void s_name(){
        System.out.println("jeevan");
    }
    
}

class Driver {
    public static void main(String[] args) {
        Poly poly = new InnerPoly();
        poly.s_name();
        
    }
}