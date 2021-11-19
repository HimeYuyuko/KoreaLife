package kribb.d3.entity;

import lombok.AccessLevel;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Getter
@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class File {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String name;


    @Column(nullable = false)
    private String size;

    @Builder
    public File(Long id, String name, String size) {
        this.id = id;
        this.name = name;
        this.size = size;
    }
}
